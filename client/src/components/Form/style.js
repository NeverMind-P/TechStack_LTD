import styled from 'styled-components';

export const Wrapper = styled.form`
    width: 100%;
    height: 100px;
    border-radius: 3px;
    border: 1px solid grey;
    background: #dadfdf;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px 0;
`;

export const Input = styled.input`
    padding: 3px;
    font-size: 18px;
    outline: none;
`;

export const Button = styled.button`
    width: 130px;
    height: 45px;
    display: flex;
    justify-content: center;
    margin: 0 5px 0;
    align-items: center;
    border: none;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
`;