import { useState } from 'react'
import DoorModel from '../models/Door'
import styles from './styles/Door.module.css'

interface DoorProps {
    value: DoorModel
}

export default function Door(props: DoorProps) {
    const [door, setDoor] = useState(props.value)

    return (
        <div className={door.selected ? `${styles.container} ${styles.selected}` : door.open ? `${styles.container} ${styles.open}` : styles.container}>
            <div className={styles.frame} onClick={() => setDoor(door.setSelected())}></div>
            <div className={styles.number}>{door.number}</div>                      
            <div className={styles.knob} onClick={() => setDoor(door.setOpen())}></div>
            <div className={styles.floor}></div>
        </div>
    )
}