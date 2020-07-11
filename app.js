var mili=0;
    var sec=0;
    var msec=0;
    var milihead = document.getElementById("mili")
    var sechead = document.getElementById("sec")
    var msechead = document.getElementById("msec")
    var interval;
    
    
    function timer()
    {
        msec++;
        msechead.innerHTML=msec;
        if(msec >= 100)
        {
            sec++;
            sechead.innerHTML=sec; 
            msec=0;
        }
        else if(sec>=60)
        {
            mili++;
            milihead.innerHTML=mili
            sec=0;
        }
    }
    function start()
    {
        interval=setInterval(timer,10)
    }
    function stop()
    {
        clearInterval(interval)
    }
    function reset()
    {
        mili=0;
        sec=0;
        msec=0; 
        milihead.innerHTML=mili;
        sechead.innerHTML=sec;
        msechead.innerHTML=msec;
        stop()

    }
  