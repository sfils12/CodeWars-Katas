// ES6 snytax preferred
anagrams = (string, words) => {
  return words.filter(function (word) {
    return word.split("").sort().join("") === string.split("").sort().join("");
  });
};

anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]);

// alternative syntax
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

// Alternative methods

// function anagrams(word, words) {
//   word = word.split('').sort().join('');
//   return words.filter(function(v) {return word == v.split('').sort().join('');});
// }

// =-=-=-=-=-=-=-=-=-=-=-=-
// let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));

// =-=-=-=-=-=-=-=-=-=-=-=- SAME ASMY SOLUTION. Included to show "e" is just a placeholder
// function anagrams(word, words) {
//   return words.filter(function (e) {
//       return e.split('').sort().join('') === word.split('').sort().join('');
//   })
// }

// =-=-=-=-=-=-=-=-=-=-=-=-
// String.sort = function () {
//   return this.split("").sort().join("");
// };

// function anagrams(word, words) {
//   return words.filter(function (x) {
//     return x.sort() === word.sort();
//   });
// }
