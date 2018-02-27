var config = function () {

    var host = "http://localhost:5000";
    // var host = "https://colams4api.herokuapp.com";
    var setting = {
        // db
        db_index_list_api_url: host + "/list?callback=?",

        // user
        user_uuid_api_url: host + "/user/uuid?callback=?",
        user_valid_api_url: host + "/user/valid?callback=?",


        // data

        //
        index_web_url: "index.html",
        login_web_url: "login.html",
    }
    return setting;
};

window.config = config();