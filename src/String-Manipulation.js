// replace words

function replaceWord(str, searchWord, replaceWord) {
  const regex = new RegExp(searchWord, "g");
  return str.replace(regex, replaceWord);
}

function joinStrings(array, delimiter) {
  return array.join(delimiter);
}

module.exports = { replaceWord, joinStrings };
