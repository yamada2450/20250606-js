//配列の宣言
let sampleArray = new Array();

//配列の要素
let fruits = ["りんご","みかん","ぶどう"];

//console.log(fruits);
console.log(fruits[0]);//りんご

//配列の要素の追加
fruits.push("ばなな");//push末尾に追加される
console.log(fruits);

fruits.unshift("もも");//unshift先頭に追加される
console.log(fruits);

//
fruits[4] = "なし";
console.log(fruits);
