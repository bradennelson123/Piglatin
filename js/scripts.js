// check words for vowels, if word starts with vowel, then append way

const vowelArray = ["a", "E", "I", "O", "U"];
const text = "";

function vowelChecker(text, vowel) {
  let splicedText = text[0]
  for (let i = 0; i < vowelArray.length; i +=1) {
    if (vowelArray[i].toLowerCase() === splicedText.toLowerCase()) {
      return text.concat("way");
    };
    console.log("Looped!");
  }
    return false;
}
vowelChecker("b", vowelArray)


// vowelArray = ["a", "e" ,"i", "o", "u"];
// for each element in the wordAway check if it matches a, e, i, o, u