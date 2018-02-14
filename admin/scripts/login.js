$(document).ready(function () {
    $(".tpl-login-btn").click(function () {
        // var url = "https://colams4api.herokuapp.com/list";
        var url = "http://localhost:5000/list";
        var parameter = $("form").serialize();
        console.log("parameter:" + parameter);


        $.ajax({
            type: "GET",
            dataType: "jsonp", // 数据类型配置成jsonp
            // jsonp: "callback", //配置jsonp随机码标签,在服务器代码部分需要用到他来拼接一个json的js对象
            data: parameter,
            url: url,
            success: function (result) {
                console.log("success:" + result);
            },
            error: function (data) {
                console.log("error:" + data);
                console.log(data);
            }

        });


    });
});