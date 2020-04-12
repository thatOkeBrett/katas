var arr = ["the", "quick", "brown", "fox", "ate", "my", "chicken"]

function Longest(arr) {
     let longestStringArr = arr.sort((a, b) => a.length - b.length).reverse();
      return longestStringArr[0];
     }

console.log(Longest(arr))