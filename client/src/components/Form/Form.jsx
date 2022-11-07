import axios from "axios";
import { React, useState } from "react";
import API_URL from "../../const/api";
import { Block, Wrapper, Input, Button } from "./style";
import { useForm } from "react-hook-form";

export const Form = () => {
    const [data, setData] = useState({});
    const { register, handleSubmit } = useForm();

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post(API_URL, data);
        handleSubmit(onsubmit)
    };

    return (
        <>
            <h3>&#129297; Create new rent</h3>
            <Wrapper onSubmit={submitHandler}>
                <Block>
                    Title
                    <Input {...register("name", { required: true, maxLength: 99 })}
                        placeholder="Ex.flat in the city center"
                        onChange={(event) =>
                            setData({ ...data, name: event.target.value })
                        }
                        style={{ width: "200px" }}
                    />
                </Block>
                <Block>
                    Rooms
                    <Input {...register("room", { min: 0, valueAsNumber: true, required: true })}
                        onChange={(event) =>
                            setData({ ...data, room: event.target.value })
                        }
                        placeholder="4"
                        style={{ width: "50px" }}
                        type="number"
                        min="1"
                    />
                </Block>
                <Block>
                    Description
                    <Input
                        {...register("description", { max: 99, required: true })} 
                        onChange={(event) =>
                            setData({ ...data, description: event.target.value })
                        }
                        name='description'
                        style={{ width: "250px" }}
                    >
                    </Input>
                </Block>
                <Block>
                    Rent Price
                    <Input
                        {...register("price", { min: 1, valueAsNumber: true, required: true })} 
                        placeholder="99.00"
                        onChange={(event) =>
                            setData({ ...data, price: +event.target.value })
                        }
                        style={{ width: "75px" }}
                    />
                </Block>
                <Block>
                    &nbsp;
                    <Button type="submit" style={{ background: "#50c878" }}>
                        Submit rent
                    </Button>
                </Block>
            </Wrapper>
        </>
    );
};
