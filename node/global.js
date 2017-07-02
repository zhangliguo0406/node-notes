/**
 * Created by 张 on 2017/7/2.
 */
//在node环境中没有window,全局的this是个空对象{}
setTimeout(function (data,a) {
    console.log(this);//this是setTimeout，定定时器也可以传传参数；
    console.log(data, a);
},1000,"你好","哈哈");
console.log(this);//{}

setTimeout((data,a)=> {
    console.log(this);//this 是 {}因为箭头函数中没有this；
    console.log(data, a);
},1000,"你好","哈哈");