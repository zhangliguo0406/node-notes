/**
 * Created by 张 on 2017/7/2.
 */
function sum() {
    let n=0;
    for(var i=0;i<arguments.length;i++){
        n+=arguments[i];
    }
    return n;
};
exports.sum=sum;
//module.exports=sum;
//如果写自定义模块，导出的函数最好不是箭头函数比如sum不要用箭头函数写，因为arguments在node环境下的箭头函数中会出问题；