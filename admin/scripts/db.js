$(function () {
    // var db = database();
    // db.list();
    console.log(window.config.db_index_list);
});

var database = function () {
    var obj = {
        list: function () {
            var url = window.config.db_index_list;
            $.getJSON(url, function (data) {
                console.log(data);
            });
        }
    }
}