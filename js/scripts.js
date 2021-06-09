function vowelChecker(text) {
  const vowelArray = ["a", "e" ,"i", "o", "u"];

for (let i = 0; i < vowelArray.length; i ++) {
  if (vowelArray[i] === text.slice(0, 1)) {   
    return text.concat("way"); 
  };

}
return false;
}



function multipleWord(text) {
  const textArray = text.split(" ");
  console.log(textArray);
  for (let i = 0; i < textArray.length; i++) {
    vowelChecker(textArray[i]);
    console.log(vowelChecker(textArray[i]));
  }
}

multipleWord("hello goodbye away up")