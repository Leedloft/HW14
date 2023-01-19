import React from 'react';
import {useFormContext} from "react-hook-form";

const SendButton = () => {
    const {handleSubmit} =useFormContext()
    const onSubmit = data => console.log(data, 'data')
    return (
        <button onClick={handleSubmit(onSubmit)}>test</button>
    );
};

export default SendButton;