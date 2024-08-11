import {useState} from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
const Profile = () => {
    return(
        <section className={styles.profileContainer}>
            <h3 className={styles.greeting}>
                Hello,<span id="userName">UserName </span>   
            </h3>
            <div className={styles.blockInf} >
                <span>Account information</span>
                <div className={styles.paramBlock}>
                    <span className={styles.param}>Username</span>    
                    <span className={styles.param}>Mattizz</span>
                </div>

                <div className={styles.paramBlock}>
                    <span className={styles.param}>Created models</span>
                    <span className={styles.param}>Browse</span>
                </div>
                <div className={styles.paramBlock}>
                    <span className={styles.param}>Created images</span>
                    <span className={styles.param}>Browse</span>
                </div>

            </div>
            <div className={styles.blockInf}>
                <div className={styles.paramBlock}>
                    <span className={styles.param}>Subcription plan</span>
                    <span className={styles.param}>Pro</span> 
                </div>        
                <Link to="/main/subscription" className = {styles.subBtn}>Change subscription plan</Link>
            </div>
        </section>
    )
}

export default Profile