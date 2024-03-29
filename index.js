function isPalindrome(word) {
  // Reverse the word
  const reversed = word.split('').reverse().join('');
  
  // Compare reversed word with the original word
  return word === reversed;
}

/* 
  Pseudocode:
  - Convert the input string 'word' into an array of characters.
  - Reverse the array of characters.
  - Join the reversed array of characters back into a string.
  - Compare the reversed string to the original input string 'word'.
  - If they are identical, return true.
  - Otherwise, return false.
*/

/*
  Written explanation:
  This function checks if the given word is a palindrome. It does this by reversing the word and comparing the reversed word with the original. If the reversed word is the same as the original word, the word is a palindrome, and the function returns true. If not, the word isn't a palindrome, and it returns false.
*/


if (require.main === module) {
  // Add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  // Additional tests
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("openai"));
}

module.exports = isPalindrome;
