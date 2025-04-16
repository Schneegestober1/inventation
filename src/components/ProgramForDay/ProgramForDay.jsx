import { Heart } from 'lucide-react'
import styles from '../ProgramForDay/programForDay.module.scss'

const ProgramForDay = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>ПРОГРАММА ДНЯ</h2>
        <div className={styles.heartbeat}>
            <Heart size={100} color='salmon' />
        </div>
        <p className={styles.text}>Пятница, 15 августа</p>

        <div className={styles.timelineItems}>

            <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                {/* <div className={styles.timelineDate}></div> */}
                <div className={styles.timelineContent}>
                    <h3>15:00</h3>
                    <p>WELCOME</p>
                </div>
            </div>

        </div>

    </section>
  )
}

export default ProgramForDay