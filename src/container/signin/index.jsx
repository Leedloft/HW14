import React from 'react';
import {Link} from "react-router-dom";
import styles from './style.module.css'

const SignIn = () => {
    return (
        <div className={styles.links}>
            <Link to='/SignIn'>
                <div className={styles.Sign_in}>
                    <a href="#">Sign In</a>
                </div>
            </Link>
            <Link to='/'>
                <div className={styles.Todo_list}>
                    <a href="#">Todo List</a>
                </div>
            </Link>
            <Link to='/LogIn'>
                <div className={styles.Log_in}>
                    <a href="#">Log In</a>
                </div>
            </Link>
        </div>
    );
};

export default SignIn;