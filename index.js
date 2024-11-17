// 联合类型
var union;
// 字面量类型
var union2;
// 数组
var arr = [1, "2"];
// 元组 固定长度/类型的数组  push可以新增
var person = ["1", 2];
person.push(3); // person输出['1', 2, 3]
// 枚举 不赋值默认从0开始
var Color;
(function (Color) {
    Color["red"] = "red";
    Color[Color["green"] = 7] = "green";
    Color[Color["blue"] = 8] = "blue"; // color.blue 8
})(Color || (Color = {}));
// 对any的看法，快速开发，提升效率，避免过度设计,可以合理的使用（偷懒）
var anyType = 1;
// unknown 未知类型 支持string | number | boolean | array | object
var unkonwnType;
// 方法需提前校验是否支持
if (typeof unkonwnType === 'function') {
    unkonwnType();
}
if (typeof unkonwnType === 'number') {
    unkonwnType.toFixed(1);
}
// void 不存在返回值 我的理解是类似于null
function fun(message, code) {
    // ...
    return;
}
