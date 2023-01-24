import React from 'react';
import styles from './style.module.css'
import FormModule from "../form";

const SignIn_block = () => {
    return (
        <div className={styles.container}>
            <span className={styles.background_icon}></span>
            <h2 className={styles.title}>Create an Account</h2>
            <span>Sign up now to get started with an account.</span>
            <div className={styles.google_block}>
                <span className={styles.google_icon}></span>
                <a className={styles.google_link} href="#">Sign up with Google</a>
            </div>
            <div className={styles.span_lines}>
                <span className={styles.line}></span>
                <span className={styles.or_span}>OR</span>
                <span className={styles.line}></span>
            </div>
            <FormModule/>
        </div>
    );
};

export default SignIn_block;