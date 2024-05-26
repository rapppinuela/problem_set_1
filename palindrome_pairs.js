function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromePairs(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words.length; j++) {
          if (i !== j) {

  const combinedOutput = words[i] + words[j];
     if (isPalindrome(combinedOutput)) {
        result.push([i, j]);
              }
          }
      }
  }
  return result;
}

// Sample Output
const palindromeList = ["bat", "tab", "cat"];
console.log(palindromePairs(palindromeList));
