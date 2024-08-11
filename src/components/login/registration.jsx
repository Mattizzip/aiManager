import { useState } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';

const Registration = () => 
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleRegistration = () => {
        navigate('/main/profile');
    };
    return (
        <div className = {styles.loginFormContainer}>
            <div className="appLogo">
                <h2 className={styles.labelLogin}>First Time?</h2>
            </div>
                <div className={styles.loginForm}>
                    <div className={styles.inputForm}>
                        <label className={styles.labelLogin} htmlFor="username">Username:</label>
                        <input className={styles.loginInput} type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className={styles.inputForm}>
                        <label className={styles.labelLogin} htmlFor="Password">Password:</label>
                        <input className={styles.loginInput} type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                      <div className={styles.inputForm}>
                        <label className={styles.labelLogin} htmlFor="Email">Email:</label>
                        <input className={styles.loginInput} type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                        <button onClick={handleRegistration} className={styles.loginBtn}>
                            Sign Up
                        </button>
                </div>    
        </div>
    );
};

export default Registration