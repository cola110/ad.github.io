$(document).ready(function () {
    $(".tpl-login-btn").click(function () {
        // var url = "https://colams4api.herokuapp.com/list";
        var url = "http://localhost:5000/list";
        var parameters = $("form").serializeArray();
        // parameters.add
        console.log(parameters)
        console.log("parameter:" + parameter);


        $.ajax({
            type: "POST",
            dataType: "jsonp", // 数据类型配置成jsonp
            jsonp: "callback", //配置jsonp随机码标签,在服务器代码部分需要用到他来拼接一个json的js对象
            jsoncallback: "deal",
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

        // $.ajax({
        //     type: "post",
        //     url: url,
        //     dataType: "jsonp",
        //     jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
        //     jsonpCallback: "callbackFunction",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
        //     success: function (data) {
        //         console.log(data.statusCode + "/" + data.message + "/" + data.name + "/" + data.age);
        //     },
        //     error: function () {
        //         alert('请求失败');
        //     }
        // });


    });
});