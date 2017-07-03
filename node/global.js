/**
 * Created by 张 on 2017/7/2.
 */
//在node环境中没有window,全局的this是个空对象{}
setTimeout(function (data,a) {
    console.log(this);//this是setTimeout，定定时器也可以传传参数；
    console.log(data, a);
},0,"你好","哈哈");
console.log(this);//{}

setTimeout((data,a)=> {
    console.log(this);//this 是 {}因为箭头函数中没有this；
    console.log(data, a);
},1000,"你好","哈哈");
//setImmediate 立即 异步的 一般和不写时间的setTimeout 是一样的
setImmediate(function () {
    console.log("立即");//和不写时间的setTimeout 输出随机先后不定
});
//process 进程 设置环境变量,生产环境 和开发环境 这个环境是在cmd命令行中设置的 window系统set a=b ,mac本a=b省略set;a和b可以随便写没有固定要求
console.log(process.env.a);//env环境 (environment) 可以判断当前环境如果在window下set a=b 此时输出b
if(process.env.a==="b"){
    console.log("你好");//a=b,此时输出你好
}else {
    console.log("hello");
}
//global 服务器端的全局变量，挂载在global上的属性可以直接使用