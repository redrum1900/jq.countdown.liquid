
;(function($){ 
    var retime = 1000;
    var stoptime;
    var timer;

    $.extend($.fn,{
        setTime:function(options){
            var def ={
                starttime:100,
                endtime:0,
                callback:function(){}
            }
            var options = $.extend(def,options);
            var cb = options.callback;


            var ele=$(this);
            $(this)[0].innerHTML='<div id="h1" class="clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div id="h2" class="clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div id="m1" class="clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div id="m2" class="clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div id="s1" class="clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div><div id="s2" class="clock c0 left"><div class="v n1"><div class="u"></div><div class="d"></div></div><div class="v n2"><div class="u"></div><div class="d"></div></div><div class="h n3"><div class="l"></div><div class="r"></div></div><div class="v n4"><div class="u"></div><div class="d"></div></div><div class="v n5"><div class="u"></div><div class="d"></div></div><div class="h n6"><div class="l"></div><div class="r"></div></div><div class="h n7"><div class="l"></div><div class="r"></div></div></div>';

                options.timer = setInterval(function()
                {
                    
                    timechange(options.starttime,ele[0]);
                    options.starttime = options.starttime - 1;
                    if((options.endtime-1) === options.starttime )
                    {
                        options.callback(ele[0]);
                        clearInterval(options.timer);

                    }
                },1000);


        },
        begin:function(option){
            retime = option;
            clearInterval(timer);
            timer = setInterval(function(){
            timechange();},1000);
        },
        stop:function(){
            stoptime = retime;
            clearInterval(timer);
        },
        restart:function(){
            retime = stoptime;
            clearInterval(timer);
            timer = setInterval(function(){
            timechange();},1000);
        }


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

        $(ele).find("#h1").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+h1);
        $(ele).find("#h2").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+h2);
        $(ele).find("#m1").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+m1);
        $(ele).find("#m2").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+m2);
        $(ele).find("#s1").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+s1);
        $(ele).find("#s2").removeClass("c0 c1 c2 c3 c4 c5 c6 c7 c8 c9").addClass("c"+s2);
    }
})(jQuery); 