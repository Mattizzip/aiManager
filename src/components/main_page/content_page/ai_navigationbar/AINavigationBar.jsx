import { NavLink } from 'react-router-dom';
import styles from './styles.module.css'

const imageTo3DLogo = new URL('../../../../assets/image_to_3d.png', import.meta.url).href;
const textTo3DLogo = new URL('../../../../assets/text_to_3d.png', import.meta.url).href;
const openSoraLogo = new URL('../../../../assets/open_sora.png', import.meta.url).href;
const chatGPTLogo = new URL('../../../../assets/chat_gpt.png', import.meta.url).href;
const stableDiffusionLogo = new URL('../../../../assets/stable_diffusion.png', import.meta.url).href;


const AINavigationBar = () =>
{
    const setActive = ({isActive}) => isActive ? `${styles.activeAiBtn}` : `${styles.aiBtn}`;
    return (
        <nav className={styles.aiNavBar}>
            <NavLink to="stableDiffusion" className={setActive}>
                <img src={stableDiffusionLogo} className = {styles.aiLogo}/>
            </NavLink>
            <NavLink to="chatgpt" className={setActive}>
               <img src={chatGPTLogo} className = {styles.aiLogo}/> 
            </NavLink>
            <NavLink to="openSora" className={setActive}>
                <img src={openSoraLogo} className = {styles.aiLogo}/>
            </NavLink>
            <NavLink to="text-to-3d" className={setActive}>
                <img src={textTo3DLogo} className = {styles.aiLogo}/>
            </NavLink>
            <NavLink to="image-to-3d" className={setActive}>
                <img src={imageTo3DLogo} className = {styles.aiLogo}/>
            </NavLink>
        </nav>
    );
};

export default AINavigationBar