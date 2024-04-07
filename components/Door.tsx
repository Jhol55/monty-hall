import Gift from './Gift'
import styles from '../styles/Door.module.css'

interface DoorProps {
    number: number
    selected: boolean
    open: boolean
    gift: boolean
    onSelect: () => void
    onOpen: () => void
}

export default function Door({number, selected, open, gift, onSelect, onOpen}: DoorProps) {   
    return (  
        <div className={selected ? `${styles.container} ${styles.selected}` : open ? `${styles.container} ${styles.open}` : styles.container}>
            <div className={styles.frame} onClick={onSelect}></div>
            <div className={styles.number}>{number}</div>                        
            <div className={styles.knob} onClick={onOpen}></div>         
            <div className={styles.floor}></div>
            {open && gift && <Gift />}
        </div>
    )
}