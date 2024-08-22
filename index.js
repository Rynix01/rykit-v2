const { getMinecraftServer } = require("./src/Minecraft-Server");
const { replaceWord, joinStrings } = require("./src/String-Manipulation");
const {
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
} = require("./src/Array-and-Object-Operations");

const {
  getRandomNumber,
  factorial,
  permutation,
  combination,
  sin,
  cos,
  tan,
} = require("./src/Math");

const {
  generateUUID,
  sha256,
  deepEqual,
  getQueryParams,
  measureExecutionTime,
} = require("./src/Utility-Functions");

const { hexToRgb, rgbToHex } = require("./src/Colors");

module.exports = {
  getMinecraftServer,
  replaceWord,
  joinStrings,
  findAndReplace,
  sortArray,
  filterArray,
  deleteKey,
  addKey,
  shallowCopy,
  deepCopy,
  getRandomNumber,
  factorial,
  permutation,
  combination,
  sin,
  cos,
  tan,
  generateUUID,
  sha256,
  deepEqual,
  getQueryParams,
  measureExecutionTime,
  asyncForEach,
  hexToRgb,
  rgbToHex,
  uniqueArray,
  getRandomArrayElement,
  shuffle,
  chunk,
};
