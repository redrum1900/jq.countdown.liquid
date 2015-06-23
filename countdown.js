
;(function($){ 
    $.extend($.fn,{
        setTime:function(options){
            var def ={
                callback:function(){}
            }
            var options = $.extend(def,options);
            var cb = options.callback;
            var timer;
            // var lasttime = 0;

            this.each(function(index){
            
            var ele=$(this);
            var starttime = parseInt($(this).attr("starttime"));
            var endtime = $(this).attr("endtime") | 0;
            // if(starttime - endtime>lasttime)
            //     lasttime = starttime-endtime;
            $(this).html('<div  class="h1 clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div  class="h2 clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div class="middle"> <div class="d"></div><div class="d"></div></div><div  class="m1 clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div  class="m2 clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div class="middle"> <div class="d"></div><div class="d"></div></div><div  class="s1 clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div  class="s2 clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div>');

                timer = setInterval(function()
                {
                    // console.log(lasttime);
                    
                    timechange(starttime,ele[0]);
                    starttime = starttime - 1;
                    // lasttime = lasttime - 1;
                    if((endtime-2) === starttime )
                    {
                        options.callback(ele[0]);
                        // if(lasttime - 2 === 0)
                        // clearInterval(timer);
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
        s1=parseInt(s/10);
        s2=s%10;
        m1=parseInt(m/10);
        m2=m%10;
        h1=parseInt(h/10);
        h2=h%10;

        $(ele).find(".h1").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+h1);
        $(ele).find(".h2").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+h2);
        $(ele).find(".m1").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+m1);
        $(ele).find(".m2").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+m2);
        $(ele).find(".s1").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+s1);
        $(ele).find(".s2").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+s2);
    }
})(jQuery); 