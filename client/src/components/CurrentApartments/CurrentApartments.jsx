import React from "react";
import { WrapperApartment, Button } from "./style";


export const CurrentApartments = ({ apartments, cancelRent }) => {
    const CurrentApartments = ({ id, name, room, price, describe }) => {
        return (
            <WrapperApartment>
                <div>
                    {name} / {room} / ${price} / {describe}
                </div>
                <div>
                    <Button
                        onClick={cancelRent}
                        style={{ background: "crimson" }}
                    >
                        Cancel rent
                    </Button>
                </div>
            </WrapperApartment>
        );
    };

    return (
        <>
            <h3>&#129321; Your current rent </h3>
            <div>
                {apartments.map((apartment) => (
                <CurrentApartments
                    key={apartment.id}
                    id={apartment.id}
                    name={apartment.name}
                    room={apartment.room}
                    price={apartment.price}
                    describe={apartment.describe}
                />
                ))}
            </div>
        </>
    );
};