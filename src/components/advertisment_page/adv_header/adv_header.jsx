import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
const AdvHeader = () => {
    return(
        <header className={styles.header}>
            <div className={styles.headerInner}>

                <span>Logo</span>

                <nav className = {styles.headerNav}>

                <NavLink className = {styles.navLink}>About</NavLink>

                <NavLink className = {styles.navLink}>Company</NavLink>

                <NavLink className = {styles.navLink}>Pricing</NavLink>

                </nav>

                <NavLink to="/login" className = {styles.navLink}>
                    Start now
                </NavLink>
            </div>

            <div className={styles.bottomLine}></div>
        </header>
    )
}

export default AdvHeader