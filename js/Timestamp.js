//时间设置
function currentTime(){
    var weekday=new Array(7)
    weekday[0]="星期一"
    weekday[1]="星期二"
    weekday[2]="星期三"
    weekday[3]="星期四"
    weekday[4]="星期五"
    weekday[5]="星期六"
    weekday[6]="星期日"
    var d=new Date(),str='';
    str+=d.getFullYear()+'年';
    str+=d.getMonth() + 1+'月';
    str+=d.getDate()+'日';
    str+=d.getHours()+'时';
    str+=d.getMinutes()+'分';
    str+= d.getSeconds()+'秒'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    str+=weekday[d.getDay()-1];
    return str;
}
setInterval(function(){$('#time').html(currentTime)},1000);