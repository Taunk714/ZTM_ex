// optional exercise
// Question 1
// Clean the room function: given an input of 
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function 
// that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 

// Bonus: Make it so it organizes strings differently from 
// number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

function cleanRoom(arr, type = "value") {
    // body...
    let memo = {};
    let r = [];
    if (type.toUpperCase() === "value") {
        arr.forEach(num => {
            if (memo.hasOwnProperty(num)){
                memo[num]++;
            }else {
                memo[num] = 1;
            }
        });
        Object.keys(memo).forEach(num =>{
            if (memo[num] == 1) {
                r.push(Number(num))
            } else{
                r.push((new Array(memo[num])).fill(Number(num)));
            }
        })
        return r;
    } else if (type.toUpperCase() === "string") {
        let v = undefined;
        let s = undefined;
        arr.forEach(num => {

        });
    } else {
        alert("Type should be value or string")
    }
}


// Question 2
// Write a javascript function that takes an array of numbers 
// and a target number. The function should find two different 
// numbers in the array that, when added together, give the target 
// number. For example: answer([1,2,3], 4)should return [1,3]


function twoSum(arr, target) {
    // body...
    let memo = {};
    for(let i = 0; i < arr.length; i++){
        if (memo.hasOwnProperty(arr[i])){
            return [arr[i], target - arr[i]];
        }else {
            memo[target - arr[i]] = i;
        }
    }
    return [];
}


// Question 3
// Write a function that converts HEX to RGB. Then Make 
// that function auto-dect the formats so that if you enter 
// HEX color format it returns RGB and if you enter RGB 
// color format it returns HEX.
function HEXToRGB(str) {
    // body...
    function h2r(str) {
        // body...
        return parseInt(str, 16);
    }

    function r2h(str) {
        // body...
        return Number(str).toString(16);
    }

    if (str.length === 7 && str[0] === "#") {
        inner1 = h2r(str.slice(1,3));
        inner2 = h2r(str.slice(3,5));
        inner3 = h2r(str.slice(5,7));
        if (inner1 > 255 || inner2 > 255 || inner3 > 255){
            alert( "Error HEX value");
        }else {
            const r = `(${inner1},${inner2},${inner3})`;
            return r;
        }
    } else {
        const splitNum = str.split(",");
        const r = splitNum.reduce((acc, num) =>{
            if (num > 255) {
                alert(`${num} is not a valid value`);
            } else if (num < 16) {
                return acc + "0" + r2h(num);
            }else{
                return acc + r2h(num) ;
            }
        }, "#");
        return r;
    }
}