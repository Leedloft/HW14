import React from 'react';
import {useFormContext} from "react-hook-form";
import styles from "../style.module.css";

const Button1 = () => {
    const {handleSubmit} = useFormContext()
    const onSubmit = data => console.log(data, 'data')
    return (
        <div>
            <button className={styles.confirm_button} type='submit'>Get Started</button>
        </div>
    );
};

export default Button1;