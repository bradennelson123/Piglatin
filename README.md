Describe: pigLatin()

Test: "It recognizes a single vowel."
Code: pigLatin("a");
Expected Output: 1

Test: "It recognizes a single vowel regardless of case."
Code: pigLatin("A");
Expected Output: 1


Test: "It recognizes a vowel at the begining of the word."
Code: pigLatin("away");
Expected Output: a

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

--------------------------------
For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". Examples: "code" becomes "odecay" and "move" becomes "ovemay."

Test: "It recognizes words that begin with a vowel in a multiple-word sentence."
Code: pigLatin("Find an element multiple word sentence with everything vowel");
Expected Output: a, a

step 1 - find vowel
step 2 - check if at beginning of word
step 3 - add way to word




Describe: vowelCounter();



Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1



Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7