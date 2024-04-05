import styles from './styles/Present.module.css'

export default function Present() {
    return (
        <div className={styles.container}>
            <div className={styles.top}></div>
            <div className={styles.body}></div>
            <div className={styles.verticalRibbon}></div>
            <div className={styles.horizontalRibbon}></div>
        </div>
    )
}