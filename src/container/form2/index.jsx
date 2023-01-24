import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm, FormProvider, useFormContext} from "react-hook-form";
import * as yup from 'yup'
import SendButton from "./button";
import styles from "./style.module.css";
import {Link} from "react-router-dom";

const schema = yup.object({
    login: yup.string().min(5).max(10).required('some msg'),
    email: yup.string().email('Not a proper email').required(),
    password: yup.number().positive().integer().typeError('password should be a number').required(),
});

const LogInModule = () => {
    const methods = useForm({
        resolver: yupResolver(schema)
    })
    const { register, formState:{ errors } } = methods;
    // console.log(errors, 'errors')


    return (
        <FormProvider {...methods}>
            <form>
                <label className={styles.label_styles}>Email Address</label>
                <input className={styles.input_styles} {...register("email")} type='text'/>
                <p>{errors.email?.message}</p>

                <label className={styles.label_styles}>Password</label>
                <input className={styles.input_styles} type='password' {...register("password")} />
                <div className={styles.eye_parent}>
                    <span className={styles.eye_icon1}></span>
                    <p>{errors.password?.message}</p>
                </div>

                <div className={styles.checkbox_div}>
                    <input className={styles.checkbox_inp} type="checkbox"/>
                    <span className={styles.checkbox_text}>Remember me <a className={styles.forgot_link}
                        href="#">Forgot Password?</a></span>
                </div>
                <SendButton/>
                <span className={styles.have_acc}> Don't have an account? <Link to='/SignIn'>Sign In</Link></span>
            </form>
        </FormProvider>
    );
};

export default LogInModule;