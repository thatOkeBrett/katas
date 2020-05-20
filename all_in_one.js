

function evenOrodd(num){
    if (num % 2 ==0){
      console.log(`${num} is even`)
    }
    else{
      console.log(`${num} is odd`)
    }
}
  evenOrodd(67)
  console.log("code for odd and even (above) \n")

 

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "# ";
    }
    return line + "\n";
}

function buildTriangle(num){
    var triangle="";
    for(var i = 1; i<=num; i++){
        triangle += makeLine(i);
    }
    return triangle;
}

console.log(buildTriangle(10));
console.log("code for a right-angled triangle (ABOVE) \n")



function combine(arr1, arr2) {
    var list = [];
    for (var i=0;i<arr1.length;++i) {
    list.push(arr1[i]);
    list.push(arr2[i]);
    }
    return list;
    }
    console.log(combine([11,22,33],[1,2,3]));

    console.log("code for a cobined array (ABOVE) \n ")

    function Frame(arr) {
        function fill (str, length, char) {
            return (str.length < length) ? fill(str + char, length, char) : str;
        }
    
        let size = arr.map((str) => {
                return str.length;
    })
    .reduce((a, b) => {
            return Math.max(a, b);
    });
    
        let line = fill('', size + 4, '*');
    
        arr = arr.map((element) => {
                return '* '+ fill(element, size, ' ') + ' *';
    })
        arr.unshift(line);
        arr.push(line);
    
        return arr.join('\n');;
    }
    
    console.log(Frame(["Write", "good", "code", "every", "day"]));

 console.log("code for a frame (ABOVE) \n ")


function hello(name){
        console.log((`Hello ${name}`));
}
hello("Tshepo");

console.log("code for a greeting (ABOVE) \n ")

function   triangle(number)
{
    for( i = 0; i < number; i++)
    {
        str = '';
        for(j = 1; j < (number - i); j++)
        {
             str += ' ';
        }
        for( k = 0; k < (2 * i + 1); k++)
        {
            str += "#";
        }
        console.log(str);
    }
}
triangle(4);

console.log("code for an isosceles (ABOVE) \n ")

var arr = ["the", "quick", "brown", "fox", "ate", "my", "chicken"]

function Longest(arr) {
     let longestStringArr = arr.sort((a, b) => a.length - b.length).reverse();
      return longestStringArr[0];
     }

console.log(Longest(arr))

console.log("code for the longest word in the array (ABOVE) \n ")

function square(num){
    str = "#"
    strRow = (`${str.repeat(num)}\n`)
    return strRow.repeat(num)

}
console.log(square(4))

console.log("code for a square (ABOVE) \n ")










    