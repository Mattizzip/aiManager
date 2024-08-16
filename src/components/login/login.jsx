import { useState } from 'react'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import httpClient from '../../httpClient';
const Login = () => 
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    
const handleLogin = async () => {

    if (!username || !password) {
        alert("Имя пользователя и пароль не могут быть пустыми.");
        return;
    }

    if (password.length < 6) {
        alert("Пароль должен содержать не менее 6 символов.");
        return;
    }

    try {
        const resp = await httpClient.post("//localhost:5000/login", {
            username,
            password
        });

        if (resp.status === 200) {
            navigate("/main/profile");
        } else if (resp.status === 401) {
            alert("Неверное имя пользователя или пароль.");
        } else {
            alert("Произошла ошибка на сервере. Попробуйте позже.");
        }
    } catch (e) {
        console.error(e);
        alert("Произошла ошибка при попытке входа. Попробуйте позже.");
    }
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