import { useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import httpClient from '../../httpClient';

const Registration = () => 
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(null)

    const handleRegistration = async () => {
        if (!email || !password || !username) {
            alert("Все поля (имя пользователя, электронная почта, пароль) должны быть заполнены.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Введите корректный адрес электронной почты.");
            return;
        }

        if (password.length < 6) { 
            alert("Пароль должен содержать не менее 6 символов.");
            return;
        }

        try {
            const response = await httpClient.post("http://localhost:5000/registration", {
                email,
                password,
                username
            });

            if (response.status === 200) {
                window.location.href = "/";
            } else if (response.status === 400) { // Пример кода состояния для ошибки регистрации
                alert("Ошибка регистрации. Проверьте введенные данные и попробуйте снова.");
            } else if (response.status === 401) {
                alert("Неверные учетные данные.");
            } else {
                alert("Произошла ошибка на сервере. Попробуйте позже.");
            }
        } catch (e) {
            console.error("Error during registration:", e);
            alert("Произошла ошибка при попытке регистрации. Попробуйте позже.");
        }
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
                        <input className={styles.loginInput} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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