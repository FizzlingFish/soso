var dataSet=[
    ['<label><input type="checkbox" class="ace"><span class="lbl"></span></label>','1','201608250560345','2016-08-25 12:23:34','345.50','3','已完成','2016-08-28 15:23:12','',' <a href="javascript:void()" onclick="picture_del(this,'+10001+')" class="btn btn-danger operation_btn">删除</a> <a href="Order_detailed.html" onclick="picture_img(this,'+234+')" class="btn bg-deep-blue operation_btn">查看</a>'],
    ['<label><input type="checkbox" class="ace"><span class="lbl"></span></label>','2','201608150560345','2016-08-25 12:23:34','145.50','1','未完成','2016-08-28 15:23:12','用户取消订单',' <a href="javascript:void()" onclick="picture_del(this,'+10001+')" class="btn btn-danger operation_btn">删除</a> <a href="javascript:void()" onclick="picture_img(this,'+234+')" class="btn bg-deep-blue operation_btn">查看</a>'],
    ['<label><input type="checkbox" class="ace"><span class="lbl"></span></label>','3','201608150560345','2016-08-25 12:23:34','145.50','1','未完成','2016-08-28 15:23:12','用户取消订单',' <a href="javascript:void()" onclick="picture_del(this,'+10001+')" class="btn btn-danger operation_btn">删除</a> <a href="javascript:void()" onclick="picture_img(this,'+234+')" class="btn bg-deep-blue operation_btn">查看</a>'],
    ['<label><input type="checkbox" class="ace"><span class="lbl"></span></label>','4','201608150560345','2016-08-25 12:23:34','145.50','1','已完成','2016-08-28 15:23:12','',' <a href="javascript:void()" onclick="picture_del(this,'+10001+')" class="btn btn-danger operation_btn">删除</a> <a href="javascript:void()" onclick="picture_img(this,'+234+')" class="btn bg-deep-blue operation_btn">查看</a>'],
    ['<label><input type="checkbox" class="ace"><span class="lbl"></span></label>','5','201608150560345','2016-08-25 12:23:34','145.50','1','未完成','2016-08-28 15:23:12','买家未付款',' <a href="javascript:void()" onclick="picture_del(this,'+10001+')" class="btn btn-danger operation_btn">删除</a> <a href="javascript:void()" onclick="picture_img(this,'+234+')" class="btn bg-deep-blue operation_btn">查看</a>'],
    ['<label><input type="checkbox" class="ace"><span class="lbl"></span></label>','6','201608150560345','2016-08-25 12:23:34','145.50','1','已完成','2016-08-28 15:23:12','',' <a href="javascript:void()" onclick="picture_del(this,'+10001+')" class="btn btn-danger operation_btn">删除</a> <a href="javascript:void()" onclick="picture_img(this,'+234+')" class="btn bg-deep-blue operation_btn">查看</a>'],
    ['<label><input type="checkbox" class="ace"><span class="lbl"></span></label>','7','201608150560345','2016-08-25 12:23:34','145.50','1','已完成','2016-08-28 15:23:12','',' <a href="javascript:void()" onclick="picture_del(this,'+10001+')" class="btn btn-danger operation_btn">删除</a> <a href="javascript:void()" onclick="picture_img(this,'+234+')" class="btn bg-deep-blue operation_btn">查看</a>'],
    ['<label><input type="checkbox" class="ace"><span class="lbl"></span></label>','8','201608250560345','2016-08-25 12:23:34','345.50','3','已完成','2016-08-28 15:23:12','',' <a href="javascript:void()" onclick="picture_del(this,'+10001+')" class="btn btn-danger operation_btn">删除</a> <a href="javascript:void()" onclick="picture_img(this,'+234+')" class="btn bg-deep-blue operation_btn">查看</a>'],
    ['<label><input type="checkbox" class="ace"><span class="lbl"></span></label>','9','201607250560345','2016-08-25 12:23:34','235.50','2','已完成','2016-08-28 15:23:12','',' <a href="javascript:void()" onclick="picture_del(this,'+10001+')" class="btn btn-danger operation_btn">删除</a> <a href="javascript:void()" onclick="picture_img(this,'+234+')" class="btn bg-deep-blue operation_btn">查看</a>'],
    ['<label><input type="checkbox" class="ace"><span class="lbl"></span></label>','10','201608250560345','2016-08-25 12:23:34','345.50','3','已完成','2016-08-28 15:23:12','',' <a href="javascript:void()" onclick="picture_del(this,'+10001+')" class="btn btn-danger operation_btn">删除</a> <a href="javascript:void()" onclick="picture_img(this,'+234+')" class="btn bg-deep-blue operation_btn">查看</a>'],
    ['<label><input type="checkbox" class="ace"><span class="lbl"></span></label>','11','201608250560345','2016-08-25 12:23:34','345.50','3','已完成','2016-08-28 15:23:12','',' <a href="javascript:void()" onclick="picture_del(this,'+10001+')" class="btn btn-danger operation_btn">删除</a> <a href="javascript:void()" onclick="picture_img(this,'+234+')" class="btn bg-deep-blue operation_btn">查看</a>'],
];
jQuery(function($) {
    var oTable1 = $('#sample-table').dataTable( {
        "data": dataSet,
        "width":"100%",
        "bLengthChange":false,
        "iDisplayLength": 20,
        //"columns" : _tableCols,
        "aaSorting": [[ 1, "desc" ]],//默认第几个排序
        "bStateSave": true,//状态保存
        "searching": false,
        "aoColumnDefs": [{"orderable":false,"aTargets":[0,2,3,5,6,7,8]
        }]

    });

    $('table th input:checkbox').on('click' , function(){
        var that = this;
        $(this).closest('table').find('tr > td:first-child input:checkbox')
            .each(function(){
                this.checked = that.checked;
                $(this).closest('tr').toggleClass('selected');
            });

    });
});
/*******滚动条*******/
$("body").niceScroll({
    cursorcolor:"#888888",
    cursoropacitymax:1,
    touchbehavior:false,
    cursorwidth:"5px",
    cursorborder:"0",
    cursorborderradius:"5px"
});
/*产品-删除*/
function picture_del(obj,id){
    layer.confirm('确认要删除吗？',{icon:0,},function(index){
        $(obj).parents("tr").remove();
        layer.msg('已删除!',{icon:1,time:1000});
    });
}
/*时间*/
laydate({
    elem: '#start',
    event: 'focus'
});