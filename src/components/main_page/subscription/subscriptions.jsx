import styles from './styles.module.css'

const SubscriptionPlans = () => {

    return(
        <section className={styles.subsBlock}>
            <h3 className={styles.compName}>Subscription Plans</h3>
            <div className={styles.typesBlock}>
                <div className={styles.type}>
                    <span className={styles.typeName}>Free</span>
                    <ul className={styles.subincl}>
                        <li className={styles.option}>Chat GPT 3.5</li>
                        <li className={styles.option}>Up to 5 3D models</li>
                        <li className={styles.option}>Up to 5 images</li>
                    </ul>
                    <span className={styles.price}>Free(0$ per month)</span>
                    <a href="" className={styles.buySubs}>Buy now</a>
                </div>
                <div className={styles.type}>
                    <span className={styles.typeName}>Base</span>
                    <ul className={styles.subincl}>
                        <li className={styles.option}>Chat GPT 4</li>
                        <li className={styles.option}>Up to 50 3D models</li>
                        <li className={styles.option}>Up to 50 images</li>
                    </ul>
                    <span className={styles.price}>49,99 $ per month</span>
                    <a href="" className={styles.buySubs}>Buy now</a>
                </div>
                <div className={styles.type}>
                    <span className={styles.typeName}>Pro</span>
                    <ul className={styles.subincl}>
                        <li className={styles.option}>Chat GPT 4</li>
                        <li className={styles.option}>Unlimited 3D models</li>
                        <li className={styles.option}>Unlimited images</li>
                    </ul>
                    <span className={styles.price}>99,99 $ per month</span>
                    <a href="" className={styles.buySubs}>Buy now</a>
                </div>
            </div>
            <div className={styles.orderDescr}>
                <p className={styles.description}>
                    Subscribing to our neural network aggregator unlocks a world of creativity and innovation. Chat with intelligent bots, create unique images, and generate 3D models from text descriptions. It’s your gateway to the future!
                </p>
            </div>
        </section>
);
};

export default SubscriptionPlans;