const eventsStore = [
  {
    title: 'INFJ Personality Type - Coffee Shop Meet & Greet',
    description: 'Being an INFJ',
    date: new Date(2024, 2, 23, 15),
    image:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w',
    type: 'offline',
    attendees: 99,
    category: 'Hobbies and Passions',
    distance: 50,
  },
  {
    title:
      'NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience',
    description: 'New York AI Users',
    date: new Date(2024, 2, 23, 11, 30),
    image:
      'https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'offline',
    attendees: 43,
    category: 'Technology',
    distance: 25,
  },
  {
    title: 'Book 40+ Appointments Per Month Using AI and Automation',
    description: 'New Jersey Business Network',
    date: new Date(2024, 2, 16, 14),
    image:
      'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    category: 'Technology',
    distance: 10,
  },
  {
    title: 'Dump writing group weekly meetup',
    description: 'Dump writing group',
    date: new Date(2024, 2, 13, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 77,
    category: 'Business',
    distance: 100,
  },
  {
    title: 'Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community',
    description: 'Over 40s, 50s, 60s Singles Chat, Meet & Dating Community',
    date: new Date(2024, 2, 14, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 140,
    category: 'Social Activities',
    distance: 74,
  },
  {
    title: 'All Nations - Manhattan Missions Church Bible Study',
    description: 'Manhattan Bible Study Meetup Group',
    date: new Date(2024, 2, 14, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'offline',
    category: 'Health and Wellbeing',
    distance: 15,
  },
]

const listEventsEl = document.querySelector('.events-NY__list-events')
const filterBlockEl = document.querySelector('.events-NY__filter-block')

const filters = {
  type: '',
  distance: '',
  category: '',
  date: '',
}

function renderEvents(events) {
  listEventsEl.innerHTML = ''

  if (!events.length) {
    listEventsEl.innerHTML = `<p>No events found</p>`
    return
  }

  events.forEach(
    ({ title, date, image, type, attendees, category, distance }) => {
      listEventsEl.insertAdjacentHTML(
        'beforeend',
        `
          <div class="card">
            <div class="wrap-img card__wrap-img">
              <img class="card__img" src="${image}" alt="event">
              ${
                type === 'online'
                  ? `
                    <div class="card__online-event">
                      <img class="wrap-img card__icon-online-event" src="./images/page2/online.svg" alt="">
                      <span class="card__text-online-event">Online Event</span>
                    </div>
                  `
                  : ''
              }
            </div>
            <div class="card__wrap-info-block">
              <time class="card-date" datetime="${date.toUTCString()}">
                ${date.toUTCString()}
              </time>
              <h3 class="card-title">${title}</h3>
              <p class="card-sphere">${category} ${type === 'online' ? '' : `(${distance} km)`}</p>
              ${attendees ? `<p class="card-visitor">${attendees} going</p>` : ''}
               ${
                 type === 'online'
                   ? `
                    <div class="card__online-event_mobile">
                      <img class="wrap-img card__icon-online-event" src="./images/page2/online.svg" alt="">
                      <span class="card__text-online-event">Online Event</span>
                    </div>
                  `
                   : ''
               }
            </div>
          </div>
        `,
      )
    },
  )
}

function renderFilter(events, key) {
  let setItems

  if (key === 'date') {
    setItems = new Set(events.map((event) => event[key].toLocaleDateString()))
  } else {
    setItems = new Set(events.map((event) => event[key]))
  }

  const options = [...setItems]
    .sort()
    .sort((a, b) => {
      if (key === 'distance') return a - b
    })
    .map((item) => {
      return `<option value="${item}">${item}</option>`
    })
    .join('')

  filterBlockEl.insertAdjacentHTML(
    'beforeend',
    `
      <div>
        <select class="${key}">
          <option value="">Any ${key}</option>
          ${options}
        </select>
      </div>
    `,
  )

  new Choices(`.${key}`, {
    searchEnabled: true,
    searchPlaceholderValue: 'Поиск...',
    itemSelectText: '',
    shouldSort: false,
    position: 'auto',
  })
}

function applyFilters() {
  const filteredEvents = eventsStore.filter(
    (event) =>
      (!filters.type || event.type === filters.type) &&
      (!filters.distance ||
        (event.distance <= +filters.distance || event.type === 'online')) &&
      (!filters.category || event.category === filters.category) &&
      (!filters.date || event.date.toLocaleDateString() === filters.date),
  )
  renderEvents(filteredEvents)
}

function initFilters() {
  filterBlockEl.innerHTML = ''

  renderFilter(eventsStore, 'type')
  renderFilter(eventsStore, 'distance')
  renderFilter(eventsStore, 'category')
  renderFilter(eventsStore, 'date')

  filterBlockEl.addEventListener('change', (e) => {
    const target = e.target
    const filterKey = target.classList[0]
    filters[filterKey] = target.value

    applyFilters()
  })
}

initFilters()
renderEvents(eventsStore)
