import axios from "axios";
import { React, useState, useEffect } from "react";
import API_URL from "../../const/api";
import { AvailableApartments } from "../AvailableApartments/AvailableApartments";
import { Form } from "../Form/Form";
import { CurrentApartments } from "../CurrentApartments/CurrentApartments";

const Home = () => {
    const [data, setData] = useState([]);
    const [rented, setRented] = useState([{
        "id": 1,
        "room": "1",
        "name": "Sun hotel",
        "price": "80",
        "description": "Great apartments"
    }])

    const cancelRent = (id) => { 
            let newAvailable = data.id.filter(
                (apartment) => apartment.id !== id
            );
            setRented({ ...data, ...newAvailable });
    };

    const updateData = (id, rented) => {
        let updatedApartment;
        if (rented) {
            updatedApartment = data.filter((apartment) => apartment.id === id);
        } else {
            updatedApartment = data.filter((apartment) => apartment.id === id);
        }
        updatedApartment = updatedApartment[0];

        if (updatedApartment.rented) {
            const newRented = data.filter(
                (apartment) => apartment !== updatedApartment
            );
            updatedApartment = false;
            const newAvailable = [...data, updatedApartment];
            setRented({ rented: newRented, available: newAvailable });
        } else {
            updatedApartment = true;
            const newRented = [...data.rented, updatedApartment];
            setRented(newRented);
        }
    };

    useEffect(() => {
        axios.get(API_URL).then((response) => setData(response.data));
    }, []);

    return (
        <>
            <h1>Apartments marketplace</h1>
            <Form />
            <CurrentApartments apartments={rented} cancelRent={cancelRent} />
            <AvailableApartments
                apartments={data}
                updateRendet={updateData}
            />
        </>
    );
};

export default Home;
