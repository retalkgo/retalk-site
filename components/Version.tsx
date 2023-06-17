import styles from "../styles/version.module.css"

export default function Version() {
    return (
        <div className={styles.box}>
            <div className={styles.left}>
                Retalk
            </div>
            <div className={styles.right}>
                v0.1.0
            </div>
        </div>
    )
}