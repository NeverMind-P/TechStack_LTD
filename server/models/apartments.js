const { Client } = require("pg");

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
client.connect();

async function getAll(req, res){
    const { room, price } = req.query
    if(room && price){
        await client.query(`SELECT * FROM apartments where room = ${room} order by price ${price};`, (err, apartments) => {
            if (err) {
                console.log(err);
            } else res.json(apartments.rows).status(200);
        });
    } else {
        await client.query("SELECT * FROM apartments;", (err, apartments) => {
            if (err) {
                console.log(err);
            } else res.json(apartments.rows).status(200);
        });
    }
};

async function getById(req, res){
    const { id } = req.params;
    await client.query(`SELECT * FROM apartments WHERE id = ${id};`, (err, apartments) => {
        if (err) {
            console.log(err);
        } else res.json(apartments.rows).status(200);
    });
};

async function setApartment(req, res){
    const { room, name, price, description } = req.body;
    const addApartmentQuery = `INSERT INTO apartments(room, name, price, description) VALUES(\'${room}\',\'${name}\',\'${price}\', \'${description}\');`;

    await client.query(addApartmentQuery, (err) => {
        if (err) {
            console.log(err);
            res.status(404);
        } else {
            res.status(200).send('Succesfully');
        }
    });
}

async function deleteApartment(req, res){
    const { id } = req.params;

    client.query(`DELETE FROM apartments WHERE id = ${id};`, (err) => {
        if (err) {
            console.log(err);
            res.status(404);
        } else res.status(200).send('Succesfully deleted');
    });
}

module.exports = {
    getAll,
    getById,
    setApartment,
    deleteApartment,
};