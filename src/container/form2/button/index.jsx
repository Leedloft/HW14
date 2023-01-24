import React from 'react';
import styles from "../style.module.css";
import {useFormContext} from "react-hook-form";

const SendButton = () => {
    const {handleSubmit} = useFormContext()
    const onSubmit = data => console.log(data, 'data')
    return (
        <div>
            <button className={styles.log_in_butt} onClick={handleSubmit(onSubmit)}>Log In</button>
        </div>
    );
};

export default SendButton;