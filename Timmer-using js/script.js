function show(){

    var time= new Date();
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
    var session="AM";
    if(h>12){
        h=h-12;
        session="PM";
    }
    if (h==0) {
        h=12;
    }
    h=(h<10) ? "0"+h:h;
    m=(m<10) ? "0"+m:m;
    s=(s<10) ? "0"+s:s;

    var totalTime=h+":"+m+":"+s+" "+session;
    document.getElementById("time").innerText=totalTime;
}
show();
setInterval(show,1000);