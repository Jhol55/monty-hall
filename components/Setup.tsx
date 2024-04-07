import { useState } from 'react'
import styles from '../styles/Setup.module.css'


interface SetupProps {
    onStart: (doorsQuantity: number, giftDoor: number) => void
}

export default function Setup({onStart}: SetupProps) {

    const [doorsQuantity, setDoorsQuantity] = useState(2)
    const [giftDoor, setGiftDoor] = useState(1)
    const [randomGiftInput, setRandomGiftInput] = useState(false)

    return (
        <div className={styles.container}>        
            <div className={styles.card}>
                <label htmlFor="">Quantidade de portas</label>
                <div className={styles.config}>
                    <button onClick={() => doorsQuantity > 2 && giftDoor < doorsQuantity ? setDoorsQuantity(doorsQuantity - 1) : doorsQuantity}>-</button>
                    <input type="numeric" value={doorsQuantity} onChange={(e) => setDoorsQuantity(+e.target.value > 2 && giftDoor <= +e.target.value ? +e.target.value: giftDoor)}/>
                    <button onClick={() => setDoorsQuantity(doorsQuantity + 1)}>+</button>            
                </div>
            </div>
            <div className={styles.card}>
                <label htmlFor="">Porta com presente</label>
                <div className={styles.config}>
                    <button onClick={() => giftDoor > 1 ? setGiftDoor(giftDoor - 1) : giftDoor}>-</button>
                    <input type="numeric" value={randomGiftInput ? '?' : giftDoor} onChange={(e) => setGiftDoor(+e.target.value)}/>
                    <button onClick={() => giftDoor < doorsQuantity ? setGiftDoor(giftDoor + 1) : doorsQuantity}>+</button>          
                </div>            
                <div>                 
                    <input type="checkbox" onChange={(e) => {setRandomGiftInput(e.target.checked); setGiftDoor(Math.floor(Math.random() * doorsQuantity) + 1)}} />  Aleatório
                </div>              
            </div>
            <div className={styles.card}>
                <button className={styles.start} onClick={() => onStart(doorsQuantity, giftDoor)}>INICIAR</button>
            </div>
        </div>
    )
}