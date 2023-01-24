import React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, FormProvider, useFormContext} from "react-hook-form";
import * as yup from 'yup'
import SendButton from "./button";
import styles from './style.module.css'
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const schema = yup.object({
    login: yup.string().min(5).max(10).required('some msg'),
    // email: yup.string().email('Not a proper email').required(),
    password: yup.number().typeError('pass should be a number').required(''),
    passwordConfirmation: yup.number().required().oneOf([yup.ref('password')], 'Passwords must match')
}).required();

const FormModule = () => {

    const methods = useForm({
        resolver: yupResolver(schema)
    })
    const {register, handleSubmit, formState: {errors}} = methods;
    // console.log(errors, 'errors')

    const onSubmit = data => console.log(data, 'data')

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.added_p}>
                <label className={styles.label_styles}>First Name</label>
                <input className={styles.input_styles} {...register("login")} type='text'/>
                <p>{errors.login?.message}</p>

                <label className={styles.label_styles}>Email Address</label>
                <input className={styles.input_styles} {...register("email")} type='text'/>
                <p>{errors.email?.message}</p>

                <label className={styles.label_styles}>Password</label>
                <input className={styles.input_styles} type='password' {...register("password")} />
                <div className={styles.eye_parent}>
                    <p>{errors.password?.message}</p>
                    <span className={styles.eye_icon1}></span>
                </div>

                <label className={styles.label_styles}>Confirm Password</label>
                <input className={styles.input_styles} type='password' {...register("passwordConfirm")} />
                <div className={styles.eye_parent}>
                    <p>{errors.password?.message}</p>
                    <span className={styles.eye_icon1}></span>
                </div>

                <div className={styles.checkbox_div}>
                    <input className={styles.checkbox_inp} type="checkbox"/>
                    <span className={styles.checkbox_text}>I have read and agree to the <a href="#">Terms of Service</a></span>
                </div>
                <SendButton/>
                <span className={styles.have_acc}>Already have Account? <Link to='/LogIn'>Log In</Link></span>
            </form>
        </FormProvider>
    );
};

export default FormModule;