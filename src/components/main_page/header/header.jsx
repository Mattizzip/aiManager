import { useState } from 'react'
import styles from './styles.module.css'
import Logo from '../../../assets/logo.svg?react'
import Profile from '../../../assets/profile.svg?react'
import Content from '../../../assets/content.svg?react'
import { Link, NavLink } from 'react-router-dom'

const setActive = ({isActive}) => isActive ? `${styles.activeProfileSvg}` : `${styles.profileSvg}`;
const Header = () =>
{
    return (
        <header className={styles.header}>
            <Logo className={styles.appLogo} />
            <div className={styles.headerContent}>
                <h2 className={styles.appName}>AI Manager</h2>
                <NavLink to="profile" className={setActive}>
                    <Profile className={styles.navLogo} />
                </NavLink>
                <NavLink to="content/chatgpt" className={setActive}>
                    <Content className={styles.navLogo} />
                </NavLink>
            </div>
        </header>
    );
};

export default Header