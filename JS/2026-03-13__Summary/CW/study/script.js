// Вам даны два целочисленных массива nums1 и nums2, отсортированные в порядке неубывания, и два целых числа m и n, представляющие количество элементов в nums1 и nums2 соответственно.
// Объедините nums1 и nums2 в один массив, отсортированный в порядке неубывания.
// Функция не должна возвращать итоговый отсортированный массив, а должна хранить его внутри массива nums1. Для этого длина nums1 равна m + n, где первые m элементов обозначают элементы, которые должны быть объединены, а последние n элементов равны 0 и должны быть проигнорированы. Длина nums2 равна n.
// var merge = function(nums1, m, nums2, n) {
// };
// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Дан массив целых чисел nums и целое число target. Верните индексы этих двух чисел так, чтобы их сумма равнялась target.
// Предположим, что для каждого входного значения существует ровно одно решение, и нельзя использовать один и тот же элемент дважды.
// Ответ можно возвращать в любом порядке.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

function findIndexes(nums, target) {
  let ind1, ind2
  nums.forEach((num1, index1) => {
    nums.slice(index1 + 1, nums.length).find((num2, index2) => {
      if (num2 === target - num1) {
        ind1 = index1
        ind2 = index2 + index1 + 1
      }
    })
  })
  return [ind1, ind2]
}
const nums = [11, 0 , 2, 4, 7, 11, 15, 2]
const target = 9

// const nums = [3,2,4]
// const target = 6

// const nums = [3,3]
// const target = 6

console.log(findIndexes(nums, target))
