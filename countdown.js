
;(function($){ 
    'use strict'
    $.extend($.fn,{
        setTime:function(options){
            var def ={
                callback:function(){}
            }
            var options = $.extend(def,options);
            var cb = options.callback;
            var timer;
            var myDate;

            this.each(function(index){
                myDate = new Date();

                var ele=$(this);
                var starttime =  parseInt($(this).attr("starttime")) || 0;
                var endtime = parseInt($(this).attr("endtime")) || 0;
                var t = myDate.getTime(); 
                var dt = 0;
                if(starttime === 0)
                {
                    myDate = new Date();
                    starttime =  parseInt(t/1000);
                    dt = endtime - starttime;
                }else
                {
                    dt = starttime;
                }
                $(this).html('<div  class="h1 clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div  class="h2 clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div class="middle"> <div class="d"></div><div class="d"></div></div><div  class="m1 clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div  class="m2 clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div class="middle"> <div class="d"></div><div class="d"></div></div><div  class="s1 clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div  class="s2 clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div>');
                timer = setInterval(function()
                {
                    
                    timechange(dt,ele[0]);
                    dt = dt - 1;
                    if( (endtime-1)  === dt )
                    {
                        //执行回调函数
                        // options.callback(ele[0]);
                        clearInterval(timer);
                    }
                },1000);
            });
        return this;


        }
        // begin:function(option){
        //     retime = option;
        //     clearInterval(timer);
        //     timer = setInterval(function(){
        //     timechange();},1000);
        // },
        // stop:function(){
        //     stoptime = retime;
        //     clearInterval(timer);
        // },
        // restart:function(){
        //     retime = stoptime;
        //     clearInterval(timer);
        //     timer = setInterval(function(){
        //     timechange();},1000);
        // }
     })

    function timechange(time,ele){
        var s = time%60;
        var m = parseInt(time/60%60);
        var h = parseInt(time/3600);
        var s1=parseInt(s/10);
        var s2=s%10;
        var m1=parseInt(m/10);
        var m2=m%10;
        var h1=parseInt(h/10);
        var h2=h%10;

        $(ele).find(".h1").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+h1);
        $(ele).find(".h2").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+h2);
        $(ele).find(".m1").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+m1);
        $(ele).find(".m2").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+m2);
        $(ele).find(".s1").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+s1);
        $(ele).find(".s2").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+s2);
    }
})(jQuery); 