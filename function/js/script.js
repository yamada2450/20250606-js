/*
//関数の定義
function sayHello() {
    //実行したい処理
    console.log("こんにちは");
}

//関数の呼び出し
sayHello();//こんにちは
*/

function sayHello(name) {
    console.log("こんにちは" + name)
}

sayHello("太郎");
sayHello("花子");
sayHello("次郎");
sayHello("岬");

//演習:商品の値段表示

callFunc("#product1", 3000);
callFunc("#product2", 5000);
callFunc("#product3", 7000);
callFunc("#product4", 10000);
callFunc("#product5", 13000);

//関数の定義
//HTML要素　=> element => elm
function callFunc(elm, price) {
    // const => 定数
    const element = document.querySelector(elm);
    //
    //
    element.textContent = "商品の値段は" + price + "円です";
}
