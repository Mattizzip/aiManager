import { useState } from "react";
import styles from "./styles.module.css";
import Header from "./header/header.jsx"
import ContentPage from './content_page/content_page.jsx'
import Profile from './profile/profile.jsx'
import SubscriptionPlans from "./subscription/subscriptions.jsx";
import { Routes, Route, Outlet } from 'react-router-dom';

const MainPage = () =>
{
    return(
        <section className={styles.mainPage}>
            <Header />
            <Outlet />
        </section>

    )
};

export default MainPage