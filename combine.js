function combine(arr1, arr2) {
    var list = [];
    for (var i=0;i<arr1.length;++i) {
    list.push(arr1[i]);
    list.push(arr2[i]);
    }
    return list;
    }
    console.log(combine([11,22,33],[1,2,3]));