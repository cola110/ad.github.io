$(document).ready(function () {
    var uuid = $.cookie('uuid');
    console.log(typeof(uuid));

    if (typeof(uuid) == "undefined") {
        // 验证是否登录
        window.location.href = window.config.login_web_url;
    } else {
        // 验证uuid是否有效

    }

});