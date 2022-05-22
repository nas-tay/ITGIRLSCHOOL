//Задание 3.1
let arr1 = ['js', 'css', 'html'];

alert("Задание 3.1.: " + arr1[0]);

//Задание 3.2
let arr2 = [0, 1, false, 2, undefined, '', 3, null];

let filteredArr2 = arr2.filter(function(item){
    if (typeof item === "number" && item != 0) {
        return true;
    }
    else {return false};
})

alert("Задание 3.2.: " + filteredArr2);

//Задание 4
let arrs = [
    [1,2], 
    [1,2,3], 
    [1,2,3,4]
];

for (let arr of arrs) {
    if (arr.length>3)
        alert("Задание 4.: " + arr);
}
