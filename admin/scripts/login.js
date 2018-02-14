$(document).ready(function () {
    $(".tpl-login-btn").click(function () {
        var url = "https://colams4api.herokuapp.com/list?callback=?";
        // var url = "http://localhost:5000/list";
        var parameter = $("form").serialize();

        $.getJSON(url, parameter, callback);
    });

    function callback(data) {
        console.log(data);
    }
});