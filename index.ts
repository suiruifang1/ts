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
    return
}