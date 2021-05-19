module.exports = {
    app: {
        port: 3000,
        views_folder: __dirname + "./../src/app/views",
        view_engine: "ejs",
        static_folder: __dirname + "./../src/public",
        temp: __dirname + "/../temp",
        session_key: "minhthu",
        session_secure: false,
    },
};