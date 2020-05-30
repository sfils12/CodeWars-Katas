// ES6 snytax preferred
anagrams = (string, words) => {
  return words.filter(function (word) {
    return word.split("").sort().join("") === string.split("").sort().join("");
  });
};

anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]);

// alternative methods
// const anagrams = function(string, array) {
//   return array.filter(function(word) {
//     return word.split("").sort().join("") === string.split("").sort().join("");
//   })
// }

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])

// function anagrams(string, array) {
//   return array.filter(function(word) {
//     return word.split("").sort().join("") === string.split("").sort().join("");
//   })
// }

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
