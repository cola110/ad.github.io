$(document).ready(function () {
    $(".tpl-login-btn").click(function () {

        var url = window.config.user_uuid_url;
        var parameter = $("form").serialize();

        $.getJSON(url, parameter, callback);
    });

    function callback(data) {
        // console.log(data);
        // console.log(data.userName);
        $.cookie('name',data.userName);
        $.cookie('level',data.userName);
        $.cookie('uuid',data.uuid);
    }
});