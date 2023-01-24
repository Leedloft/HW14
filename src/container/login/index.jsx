import React from 'react';
import styles from './style.module.css'
import LogInModule from "../form2";

const LogInBlock = () => {
    return (
        <div className={styles.container}>
            <span className={styles.background_icon}></span>
            <h2 className={styles.title}>Create an Account</h2>
            <span>Welcome back, please enter your details.</span>
            <div className={styles.google_block}>
                <span className={styles.google_icon}></span>
                <a className={styles.google_link} href="#">Sign up with Google</a>
            </div>
            <div className={styles.span_lines}>
                <span className={styles.line}></span>
                <span className={styles.or_span}>OR</span>
                <span className={styles.line}></span>
            </div>
            <LogInModule/>
        </div>
    );
};

export default LogInBlock;