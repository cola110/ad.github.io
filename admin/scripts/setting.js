var config = function () {

    var host = "http://localhost:5000";
    // var host = "https://colams4api.herokuapp.com";
    var setting = {
        // db
        db_index_list_url: host + "/list?callback=?",

        // user
        user_uuid_url: host + "/user/uuid?callback=?",

        // data
    }
    return setting;
};

window.config = config();