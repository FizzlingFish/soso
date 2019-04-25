
function loadPage(url) {
    $.ajax({
        type: "POST",
        url: url,
        async: true,
        dataType: "html",
        contentType: 'application/json; charset=utf-8',
        success: function (html) {
            $('#right').html(html);
            //$('#right').load(url);//load函数同样能实现效果
        }
    });
}
