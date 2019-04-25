
var code1 ; //在全局定义验证码

function createCode(){
    code1 = "";
    var codeLength = 4;//验证码的长度
    var checkCode = document.getElementById("code1");
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
        'S','T','U','V','W','X','Y','Z');//随机数
    for(var i = 0; i < codeLength; i++) {//循环操作
        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
        code1 += random[index];//根据索引取得随机数加到code上
    }
    checkCode.value = code1;//把code值赋给验证码
}
//校验验证码
function validate(){
    var inputCode = document.getElementById("input1").value.toUpperCase(); //取得输入的验证码并转化为大写
    if(inputCode.length <= 0) { //若输入的验证码长度为0
        alert("请输入验证码！"); //则弹出请输入验证码
    }else if(inputCode != code1 ) { //若输入的验证码与产生的验证码不一致时
        alert("验证码输入错误！@_@"); //则弹出验证码输入错误
        createCode();//刷新验证码
        document.getElementById("input1").value = "";//清空文本框
    }else { //输入正确时
        alert("合格！^-^");
    }
}
$('#login_btn').on('click', function(){
    var num=0;
    var str="";
    $("input[type$='text'],input[type$='password']").each(function(n){
        if($(this).val()=="")
        {

            layer.alert(str+=""+$(this).attr("data-name")+"不能为空！\r\n",{
                title: '提示框',
                icon:0,
            });
            num++;
            return false;
        }

    });
    if(num>0){  return false;}
    else {
        layer.alert('登陆成功！',{
            title: '提示框',
            icon:1,
        });
        location.href="shops_index.html";
        layer.close(index);
    }
});
$(document).ready(function(){
    $("input[type='text'],input[type='password']").blur(function(){
        var $el = $(this);
        var $parent = $el.parent();
        $parent.attr('class','frame_style').removeClass(' form_error');
        if($el.val()==''){
            $parent.attr('class','frame_style').addClass(' form_error');
        }
    });
    $("input[type='text'],input[type='password']").focus(function(){
        var $el = $(this);
        var $parent = $el.parent();
        $parent.attr('class','frame_style').removeClass(' form_errors');
        if($el.val()==''){
            $parent.attr('class','frame_style').addClass(' form_errors');
        } else{
            $parent.attr('class','frame_style').removeClass(' form_errors');
        }
    });
})