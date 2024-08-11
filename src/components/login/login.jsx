import { useState } from 'react'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Login = () => 
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('main/profile');
    };
    return (
        <div className = {styles.loginFormContainer}>
            <div className="appLogo">
                <h2 className={styles.labelLogin}>AI Manager</h2>
            </div>
                <div className={styles.loginForm}>
                    <div className={styles.inputForm}>
                        <label className={styles.labelLogin} htmlFor="username">Username:</label>
                        <input className={styles.loginInput} type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className={styles.inputForm}>
                        <label className={styles.labelLogin} htmlFor="password">Password:</label>
                        <input className={styles.loginInput} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className={styles.rememberMeBlock}>
                        <label className={styles.labelLogin}>
                            <input className={styles.loginInput} type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>
                            Remember me
                        </label>
                        <span className={styles.labelLogin}>First time?</span>
                    </div>
                    <div className={styles.buttonBlock}>
                        <button onClick={handleLogin} className={styles.loginBtn}>
                            Log In
                        </button>
                        <NavLink to="/registration" className = {styles.loginBtn}>
                            Sign up
                        </NavLink>
                    </div>
                </div>  
        </div>
    );
};

export default Login