const data = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
const expected = [["kita", "atik", "tika"], ["aku", "kua"], ["makan"], ["kia"]];

function arraySort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

function groupingAnagrams(words) {
  const anagrams = {};

  for (let i in words) {
    const word = arraySort(words[i].split("")).join();
    anagrams[word]
      ? anagrams[word].push(words[i])
      : (anagrams[word] = [words[i]]);
  }

  return Object.values(anagrams);
}

console.log("expected", expected);
console.log("result :", groupingAnagrams(data));
