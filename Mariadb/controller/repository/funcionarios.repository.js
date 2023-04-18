const connection = require ("../mysql-connection");

module.exports = {
    find: () => {
        return connection.select().from("funcionarios");
    },
};