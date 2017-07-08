/**
 * Created by z on 2017/7/8.
 */
//1.buffer 代表的是内存
//2.node为了操作二进制 生产出来的一个类型，buffer默认展示成16进制，可以和 字符串无条件转化
//2进制 最大1 16进制 f
//字符串在node中 只支持utf8格式
//一个汉字utf8有几个字节 3个字节
//比字节小的单位 1个字节由8个位组成 => 1个汉字多少位
console.log(Math.pow(2,8)-1);
//16进制最大值ff 代表10进制是255
//当前位的最大值*进制^当前所在位-1
//1).声明buffer 大小是固定的，buffer和数组非常像有索引
var buffer= new Buffer(100);
//2).通过数组创建
var buffer = new Buffer([12,23,17]);

//3)字符串创建
var buffer=new Buffer("你好");
console.log(buffer);
console.log(buffer.toString());
//copy concat
/*
var buf1=new 7.Buffer("我是");
var buf2=new 7.Buffer("你好");
var bigBuf=new 7.Buffer(12);
buf1.copy(bigBuf);
buf2.copy(bigBuf,buf1.length);
console.log(bigBuf.toString());
*/
//slice 数组的slice 截取 返回的是新数组。
var buf1=new Buffer("坚持");
var buf2=new Buffer("就是");
var buf3=new Buffer("胜");
var buf4=new Buffer("利");
Buffer.myConcat=function(list,totalLength) {
    //计算总长
    if(typeof  totalLength==="undefined"){
        totalLength=0;
        list.forEach(item=>totalLength+=item.length);
    }
    //2.创建一个新buffer
    let buffer=new Buffer(totalLength);
    //3.寻欢数组每一项 拷贝的buffer上
    let index=0;
    list.forEach(item=>{
        item.copy(buffer,index);
        index+=item.length
    });
    //截取有效长度
    return buffer.slice(0,index)
};
console.log(Buffer.myConcat([buf1, buf2, buf3, buf4],1000).toString());
console.log(Buffer.concat([buf1, buf2, buf3, buf4],1000).toString());
