import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Header from "./header/header.jsx"
import ContentPage from './content_page/content_page.jsx'
import Profile from './profile/profile.jsx'
import SubscriptionPlans from "./subscription/subscriptions.jsx";
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import httpClient from '../../httpClient.js'

const MainPage = () =>
{
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const resp = await httpClient.get("http://localhost:5000/@me"); // Используйте http вместо //
                setUser(resp.data);
            } catch (e) {
                console.log(e);
                navigate("/login")
            }
        })();
    }, []);
    if (user != null) {
        return(
            <section className={styles.mainPage}>
                <Header />
                <Outlet />
            </section>
        )
    }
    else{
        
    }

};

export default MainPage

