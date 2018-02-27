$(document).ready(function () {
    $(".tpl-login-btn").click(function () {

        var url = window.config.user_uuid_api_url;
        var parameter = $("form").serialize();

        $.getJSON(url, parameter, callback);
    });

    function callback(data) {
        var code = data.resultCode;
        console.log(code);
        if (code == 200) {
            $.cookie("name", data.result.userName);
            $.cookie("level", data.result.level);
            $.cookie("uuid", data.result.uuid);
            window.location.href = window.config.index_web_url;
        } else {
            alert("账户密码错误")
        }
    }
});