$(document).ready(function () {
    var uuid = $.cookie('uuid');
    console.log(typeof(uuid));

    if (typeof(uuid) == "undefined") {
        // 验证是否登录
        console.log(window.config.root_login_web_url);
        window.location.href = window.config.root_login_web_url;
    }
});