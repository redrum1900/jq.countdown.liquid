##一个简单地倒计时插件

使用方法介绍

HTML部分
```
    <div id="myclock"  starttime='10' endtime='0'/>
```

js部分
```
    $("#myclock").setTime({
	callback:function(ele){
		//回调函数
		
	}	
```

参数
```
starttime 开始时间 如果开始时间为0，那么计时器的开始时间为当前时间的时间戳，结束时间为设置的时间戳，这样可以避免网页缓存导致计时错误
endtime 结束时间 默认为0
callback 时间结束后回调的方法
```




