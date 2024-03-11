const array1:Array<number>=[1, 2, 3, 4, 5, 6];
const array2:Array<string>=['1','2','3','4','5','6'];

function revers<T>(array:T[]):T[]{
    return array.reverse();
}

console.log(revers(array1));
console.log(revers(array2));

