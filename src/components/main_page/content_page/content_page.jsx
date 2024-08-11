import AINavigationBar from './ai_navigationbar/AINavigationBar.jsx'
import styles from './styles.module.css'
import AIChat from './chat_with_ai.jsx'
import Uploader from './upload.jsx';
import { Outlet } from 'react-router-dom';
const ContentPage = () => {
    return (
        <main className={styles.contentSection}>
            <AINavigationBar />
            <Outlet />
        </main>
    );
};

export default ContentPage