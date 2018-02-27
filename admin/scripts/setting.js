var config = function () {

    var host = "http://localhost:5000";
    // var host = "https://colams4api.herokuapp.com";
    var setting = {
        ///////////////
        // api url
        ///////////////

        // db
        db_index_list_api_url: host + "/list?callback=?",

        // user
        user_uuid_api_url: host + "/user/uuid?callback=?",
        user_valid_api_url: host + "/user/valid?callback=?",


        // data

        ///////////////
        // web url
        ///////////////

        root_index_web_url: "index.html",
        root_login_web_url: "login.html",

        db_login_web_url: "db/index.html",


    }
    return setting;
};

window.config = config();