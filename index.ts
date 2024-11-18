// 联合类型
let union:String | Number | String[]

// 字面量类型
let union2:0 | 1 | 2

// 数组
let arr:(Number | String)[] = [1,"2"]

// 元组 固定长度/类型的数组  push可以新增
let person:[String,Number] = ["1",2];
person.push(3) // person输出['1', 2, 3]

// 枚举 不赋值默认从0开始
enum Color {
    red = "red", // color.red red
    green = 7, // color.green 7
    blue // color.blue 8
}

// 对any的看法，快速开发，提升效率，避免过度设计,可以合理的使用（偷懒）
let anyType:any = 1

// unknown 未知类型 支持string | number | boolean | array | object
let unkonwnType:unknown
// 方法需提前校验是否支持
if(typeof unkonwnType === 'function'){
    unkonwnType()
}
if(typeof unkonwnType === 'number'){
    unkonwnType.toFixed(1)
}

// void 不存在返回值 我的理解是类似于null
function fun(message:string,code?:number):void{
    // ...
}

// 泛型
let arr2:Array<number> = [1,2,3]

let lastInArray = <T>(arr:T[]):T=>{
    return arr[arr.length -1]
}
lastInArray([1,2,'3'])

// ‌type‌：主要用于定义基本类型别名、联合类型、元组等。它也可以用来表示非对象类型，如基本类型、枚举、函数等。
// ‌interface‌：主要用于描述对象类型，定义一个对象的结构。它不能表示非对象类型。
// ‌type‌：可以通过&操作符来实现类似接口的继承。
// ‌interface‌：可以通过extends关键字来继承其他接口。
// ‌type‌：不能重复定义同一个名称的类型
// ‌interface‌：可以多次定义同一个名称的接口，并且可以合并属性。

// 常量断言 没有常量断言cst.name可以被修改
const cst = {
    name:'zhangsan',
} as const