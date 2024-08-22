import AdvContent from './adv_content/adv_content.jsx'
import AdvHeader from './adv_header/adv_header.jsx'
import AdvFooter from './adv_footer/adv_footer.jsx'
import styles from './styles.module.css'


const AdvLayout = () => {
    return(
        <section className={styles.advLayoutContainer}>
            <AdvHeader />
            <AdvContent />
            <AdvFooter />
        </section>
    )
}

export default AdvLayout