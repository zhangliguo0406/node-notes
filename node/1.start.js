/**
 * Created by 张 on 2017/7/2.
 */
//箭头函数
function a(b) {
    return function (d) {
        return b+d
    }
}
//用箭头函数表达如上
//let a=b=> d => b+d;
//console.log(a(2)(2));
//可以通过箭头函数解决this指向问题，箭头函数本身不存在this，输出this会自动向上一级查找
/*let obj={
    a:function () {
        setTimeout(function () {
            console.log(this);//this 是Window
        })
    }
};*/
//
let obj={
    a:function () {
        setTimeout(()=> {
            console.log(this);//this obj  箭头函数本身不存在this，输出this会自动向上一级查找,查找到a执行点前面是obj，this就是obj；
        },200)
    }
};
obj.a();
//node 是单线程 异步的 因为他是基于js的就js就是单线程的
//如果想开多线程，要开子进程；
//多线程（感觉像同一时间干了很多事情，其实是快速的切换上下文）
