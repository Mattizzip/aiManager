import { useState } from 'react'
import styles from './styles.module.css'
import SendButton from '../../../assets/send_message.svg?react'

const AIChat = ({aiName}) =>
{
    const [messageText, setMessageText] = useState('');
    const [messages, setMessages] = useState([
        { sender: 'user', text: 'Привет!' },
        { sender: 'server', text: 'Ну привет!' },
    ]);

    const sendMessage = async () => {
        if (messageText.trim()) {
            setMessages([...messages, { sender: 'user', text: messageText }]);
            try {
                const response = await fetch('https://backend.com/getGPTResponse', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: messageText, aiType: {aiName} }),
                });
                const data = await response.json();
                setMessages([...messages, { sender: 'user', text: messageText }, { sender: 'server', text: data.reply }]);
                setMessageText('');
            } catch (error) {
                console.error('Ошибка при отправке сообщения:', error);
            }
        }
    };

    return ( 
        <section className={styles.chatContainer}>
            <h3 className={styles.componentHeader}>{aiName}</h3>
            <div className={styles.chatBlock}>
                <div className={styles.messages}>
                    <div className={styles.usersms}>
                        <span className={styles.usersmsText}>
                            Привет!
                        </span>
                    </div>
                    <div className={styles.serversms}>
                        <span className={styles.serversmsText}>
                            Ну привет!
                        </span>
                    </div>
                </div>
                <div className={styles.sendForm}>
                    <textarea className={styles.sendMessageArea} type="text" id="messageText" value={messageText} onChange={(e) => setMessageText(e.target.value)}></textarea>
                    <button type="button" className = {styles.sendBtn} onClick={sendMessage}>
                        <SendButton className={styles.sendBtnIcon}/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AIChat