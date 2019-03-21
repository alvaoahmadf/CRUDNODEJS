const config = {
    database: {
        url: "mongodb://127.0.0.1:27017/XIR6" //url dengan nama database "XIR6"
    },
    server: {
        host: "127.0.0.1",
        port: "3000"
    }
}
module.export = config //export modul config, supaya dapat diakses di file lain