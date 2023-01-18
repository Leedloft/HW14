import React from 'react';
import AllButton from "./show-all-button";
import ActiveButton from "./show-active-button";
import CompleteButton from "./show-complete-button";
import styles from './style.module.css'
const FilterButton = () => {
    return (
        <div className={styles['buttons_parent']}>
            <AllButton/>
            <ActiveButton/>
            <CompleteButton/>
        </div>
    );
};

export default FilterButton;