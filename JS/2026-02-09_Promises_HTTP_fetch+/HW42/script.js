// 1.Создайте функцию waitForTime, которая возвращает Promise. Этот промис должен резолвиться через указанное количество миллисекунд, которое нужно передавать в функцию waitForTime в качестве аргумента. Если время вышло, промис резолвится с сообщением "Ожидание завершено".

// Например через секунды, 3 или 5 секунд.

const waitForTime = (ms) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      ms < 2500 ? res('Ожидание завершено') : rej('Error')
    }, ms)
  })

waitForTime(2000)
  .then((res) => console.log(res, ':вызов1'))
  .catch((err) => console.log(err, ':вызов1'))

waitForTime(1000)
  .then((res) => console.log(res, ':вызов2'))
  .catch((err) => console.log(err, ':вызов2'))

waitForTime(3000)
  .then((res) => console.log(res, ':вызов3'))
  .catch((err) => console.log(err, ':вызов3'))
