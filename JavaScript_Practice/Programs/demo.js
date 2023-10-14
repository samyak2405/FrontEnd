let arr = [1,2,3,4,5];
arr.forEach((num,index,array)=>{
    array[index] = num*2;
});
console.log(arr);
arr.forEach((num,index)=>{
    console.log(`Element at index ${index} is ${num}`);
});

let range = {
    from:1,
    to:5
};

let arr2 = Array.from(range);
console.log(arr2);