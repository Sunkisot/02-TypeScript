"use strict";
// 接口
// 接口可以理解为一个约定 一个规范
// options参数中 需要包含 url type data success
function ajax(options) {
    console.log(options);
}
ajax({
    url: 'https://www.baidu.com',
    // type: 'get',
    // data: {},
    success: function (data) {
    }
});
var poi = {
    x: 10,
    y: 10,
    z: 100
};
// poi.x = 100 不可赋值
