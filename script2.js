let num = 2;
console.log(num);
num = num**3;
console.log(num);
let string = 'hello world';
string +='!!!!!!';
console.log(string);
let bool = true;
bool = false;
bool = false && true;
bool = false || true;
bool = !bool;
bool = false && true || true && !false;
bool = true;

num = 10;
bool = 2 > num;
bool = 2 < num;
bool = 10 < num;
bool = 10 == num;
bool = 10 <= num;
bool = 10 >= num;
bool = 10 != num;
bool = '10' == num;
bool = '10' !== num;
console.log(bool);

let noValue = null;
let noValue2;
console.log(noValue2); //undefined
num = 0 * -1;
num = 0.1 + 0.2;
console.log(num);
let array = [1, 2, 3, 4];
array = [1, 'hello', true, undefined, null];
console.log(array);
console.log(array[0]);
array[0] = 7;
console.log(array);
array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(array[1][2]);
array = [ [ [ [ [5] ] ] ] ];
console.log(array[0][0][0][0][0]);
let obj = {
    name : 'greg',
    age: 14,
    eyeColor: '639',
    favpets: ['dogs', 'cats', 'rats']
};
console.log(obj);
console.log(obj.name);
console.log(obj.favpets[1]);
console.log(array.length);
console.log(string.length);
console.log(string[0]);
