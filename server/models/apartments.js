const { Client } = require("pg");

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
client.connect();

async function getFiltered(room, price){
    return client.query(`SELECT * FROM apartments where room = ${room} order by price ${price};`);
};

async function getAll(){
    return client.query("SELECT * FROM apartments;");
};

async function getById(id){
    return client.query(`SELECT * FROM apartments WHERE id = ${id};`)
};

async function setApartment({ room, name, price, description }){
    client.query(`INSERT INTO apartments(room, name, price, description) VALUES(\'${room}\',\'${name}\',\'${price}\', \'${description}\');`);
}

async function deleteApartment(id){
    return client.query(`DELETE FROM apartments WHERE id = ${id};`);
}

module.exports = {
    getAll,
    getById,
    setApartment,
    deleteApartment,
    getFiltered
};