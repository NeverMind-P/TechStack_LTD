import React from "react";
import { WrapperApartments, Buttons, Button, Div } from "./style";
import axios from "axios";
import API_URL from "../../const/api";
import { Select } from "./style";
import { useState } from "react";

const clickHandlerDelete = (event, id) => {
    axios.delete(`${API_URL}/${id}`);
};

export const AvailableApartments = ({ apartments }) => {
    const AvailableApartments = ({ id, name, room, price }) => {
        return (
            <WrapperApartments>
                <div>
                    {name} / {room} / ${price}
                </div>
                <Buttons>
                    <Button
                        onClick={(e) => {
                        }}
                        style={{ background: "darkblue" }}
                    >
                        Rent
                    </Button>
                    <Button
                        onClick={(e) => {
                            clickHandlerDelete(e, id);
                        }}
                        style={{ background: "crimson" }}
                    >
                        Delete
                    </Button>
                </Buttons>
            </WrapperApartments>
        );
    };
    const [data, setData] = useState(apartments)    
      
    const filterApartments = (elem) => {
        if(elem.target.value === 'higest'){
            setData(data.sort((a, b) => {
                return b.price - a.price;
            }));
        } else {
            setData(data.sort((a, b) => {
                return a.price - b.price;
            }));
        }
    }

    return (
        <>
            <h3>&#127968; Available Apartments</h3>
            <Div className="test"><h4>Sorted by</h4>
            <Select style={{ width: "250px" }} onChange={filterApartments}>
                <option value="higest">Highest First</option>
                <option value="lowest">Lowest First</option>
            </Select></Div>
            <div>
                <div>
                    {data.map((apartment) => (
                        <AvailableApartments
                            key={apartment.id}
                            id={apartment.id}
                            name={apartment.name}
                            room={apartment.room}
                            price={apartment.price}
                            describe={apartment.describe}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
