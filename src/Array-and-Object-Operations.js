function findAndReplace(array, searchElement, replaceElement) {
  return array.map((item) => (item === searchElement ? replaceElement : item));
}

function sortArray(array, ascending = true) {
  return array.sort((a, b) => (ascending ? a - b : b - a));
}

function filterArray(array, callback) {
  return array.filter(callback);
}

function deleteKey(obj, key) {
  const { [key]: deletedKey, ...rest } = obj;
  return rest;
}

function addKey(obj, key, value) {
  return { ...obj, [key]: value };
}

function shallowCopy(obj) {
  return { ...obj };
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

function uniqueArray(arr) {
  return [...new Set(arr)];
}
function getRandomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function chunk(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

module.exports = {
  findAndReplace,
  sortArray,
  filterArray,
  deleteKey,
  addKey,
  shallowCopy,
  deepCopy,
  asyncForEach,
  uniqueArray,
  getRandomArrayElement,
  shuffle,
  chunk,
};
