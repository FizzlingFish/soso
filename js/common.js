/*
 * 手机号正则表达式
 */
function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}
/*
 * 邮箱正则表达式
 */
function isEmailNo(email) {
    var pattern = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    return pattern.test(email);
}
/*
 * QQ正则表达式
 */
function isQqNo(qq) {
    var pattern = /[1-9][0-9]{4,14}/;
    return pattern.test(qq);
}
/*
 * 验证手机号
 */
function checkPhone() {
    if ($.trim($('#telephone').val()).length == 0) {
        $('#telephoneError').html('手机号码没有输入');
        $('#telephone').focus();
        return false;
    } else {
        $('#telephoneError').html('');
        if (isPhoneNo($('#telephone').val()) == false) {
            $('#telephoneError').html('手机号码不正确');
            $('#telephone').focus();
            return false;
        } else {
            return true;
        }
    }
}
/*
 * 验证密码
 */
function checkPassword() {
    if ($.trim($('#password').val()).length == 0) {
        $('#passwordError').html('密码没有输入');
        $('#password').focus();
        return false;
    } else {
        $('#passwordError').html('');
        var rePass = $.trim($('#rePassword').val());
        var pass = $.trim($('#password').val());
        if (rePass.length != 0) {
            if (rePass != pass) {
                $('#rePasswordError').html('两次密码不一致');
                return false;
            } else {
                $('#rePasswordError').html('');
                return true;
            }
        }
    }
}
/*
 * 重复密码
 */
function checkrePassword() {
    var rePass = $.trim($('#rePassword').val());
    if (rePass.length == 0) {
        $('#rePasswordError').html('密码没有输入');
        $('#rePassword').focus();
        return false;
    } else {
        $('#rePasswordError').html('');
        var pass = $.trim($('#password').val());
        if (pass.length == 0) {
            $('#rePassword').val('');
            $('#passwordError').html('密码没有输入');
            $('#password').focus();
            return false;
        } else if (rePass != pass) {
            $('#rePasswordError').html('两次密码不一致');
            return false;
        } else {
            $('#rePasswordError').html('');
            return true;
        }
    }
}
/*
 * 验证联系人
 */
function checkName() {
    if ($.trim($('#name').val()).length == 0) {
        $('#nameError').html('联系人没有输入');
        $('#name').focus();
        return false;
    } else {
        $('#nameError').html('');
        return true;
    }
}
/*
 * 验证邮箱
 */
function checkEmail() {
    if ($.trim($('#email').val()).length == 0) {
        $('#emailError').html('邮箱没有输入');
        $('#email').focus();
        return false;
    } else {
        $('#emailError').html('');
        if (isEmailNo($('#email').val()) == false) {
            $('#emailError').html('邮箱格式不正确');
            $('#email').focus();
            return false;
        } else {
            $('#emailError').html('');
            return true;
        }
    }
}
/*
 * 验证QQ
 */
function checkQQ() {
    if ($.trim($('#qq').val()).length == 0) {
        $('#qqError').html('QQ没有输入');
        $('#qq').focus();
        return false;
    } else {
        $('#qqError').html('');
        if (isQqNo($('#qq').val()) == false) {
            $('#qqError').html('QQ格式不正确');
            $('#qq').focus();
            return false;
        } else {
            $('#qqError').html('');
            return true;
        }
    }
}
/*
 * 注册表单提交时验证
 */
function checkRegister() {
    if (checkPhone() == false) {
        return false;
    }
    if (checkPassword() == false) {
        return false;
    }
    if (checkrePassword() == false) {
        return false;
    }
    if (checkName() == false) {
        return false;
    }
    if (checkEmail() == false) {
        return false;
    }
    if (checkQQ() == false) {
        return false;
    }
}

function drawCircle(_options){
    var options = _options || {};    //获取或定义options对象;
    options.angle = options.angle || 1;    //定义默认角度1为360度(角度范围 0-1);
    options.color = options.color || '#fff';    //定义默认颜色（包括字体和边框颜色）;
    options.lineWidth = options.lineWidth || 10;    //定义默认圆描边的宽度;
    options.lineCap = options.lineCap || 'square';    //定义描边的样式，默认为直角边，round 为圆角

    var oBoxOne = document.getElementById(options.id);
    var sCenter = oBoxOne.width / 2;    //获取canvas元素的中心点;
    var ctx = oBoxOne.getContext('2d');
    var nBegin = Math.PI / 2;    //定义起始角度;
    var nEnd = Math.PI * 2;    //定义结束角度;
    var grd = ctx.createLinearGradient(0, 0, oBoxOne.width, 0);    //grd定义为描边渐变样式;
    grd.addColorStop(0, 'red');
    grd.addColorStop(0.5, 'yellow');
    grd.addColorStop(1, 'green');

    ctx.textAlign = 'center';    //定义字体居中;
    ctx.font = 'normal normal bold 20px Arial';    //定义字体加粗大小字体样式;
    ctx.fillStyle = options.color == 'grd' ? grd : options.color;    //判断文字填充样式为颜色，还是渐变色;
    ctx.fillText((options.angle * 100) + '%', sCenter, sCenter);    //设置填充文字;
    /*ctx.strokeStyle = grd;    //设置描边样式为渐变色;
    ctx.strokeText((options.angle * 100) + '%', sCenter, sCenter);    //设置描边文字(即镂空文字);*/
    ctx.lineCap = options.lineCap;
    ctx.strokeStyle = options.color == 'grd' ? grd : options.color;
    ctx.lineWidth = options.lineWidth;

    ctx.beginPath();    //设置起始路径，这段绘制360度背景;
    ctx.strokeStyle = '#D8D8D8';
    ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin, nEnd, false);
    ctx.stroke();

    var imd = ctx.getImageData(0, 0, 240, 240);
    function draw(current) {    //该函数实现角度绘制;
        ctx.putImageData(imd, 0, 0);
        ctx.beginPath();
        ctx.strokeStyle = options.color == 'grd' ? grd : options.color;
        ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin, (nEnd * current) - nBegin, false);
        ctx.stroke();
    }

    var t = 0;
    var timer = null;
    function loadCanvas(angle) {    //该函数循环绘制指定角度，实现加载动画;
        timer = setInterval(function(){
            if (t > angle) {
                draw(options.angle);
                clearInterval(timer);
            }else{
                draw(t);
                t += 0.02;
            }
        }, 20);
    }
    loadCanvas(options.angle);    //载入百度比角度  0-1 范围;
    timer = null;

}
