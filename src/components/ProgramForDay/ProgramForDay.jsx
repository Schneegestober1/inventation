import { Heart } from 'lucide-react'
import styles from '../ProgramForDay/programForDay.module.scss'
import ImageCard from '../ImageCard/ImageCard'

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
                <ImageCard size={150} className={styles.timelineImg} src={'public/images/IMG_4337.jpg'} alt='WELCOME' />
                <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTime}>15:30</h3>
                    <p>WELCOME</p>
                </div>
            </div>
            <div className={styles.timelineItem}>
                <ImageCard size={150} className={styles.timelineImg} src={'public/images/IMG_8614.jpg'} alt='WELCOME' />
                <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTime}>16:00</h3>
                    <p className={styles.timelineText}>ВЫЕЗДНАЯ <br /> РЕГИСТРАЦИЯ</p>
                </div>
            </div>
            <div className={styles.timelineItem}>
                <ImageCard size={150} className={styles.timelineImg} src={'public/images/IMG_4348.jpg'} alt='WELCOME' />
                <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTime}>17:00</h3>
                    <p>БАНКЕТ</p>
                </div>
            </div>
            <div className={styles.timelineItem}>
                <ImageCard size={150} className={styles.timelineImg} src={'public/images/IMG_2951.jpg'} alt='WELCOME' />
                <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTime}>20:00</h3>
                    <p>ТОРТ</p>
                </div>
            </div>
            <div className={styles.timelineItem}>
                <ImageCard size={150} className={styles.timelineImg} src={'public/images/Wedding_day.jpg'} alt='WELCOME' />
                <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTime}>22:00</h3>
                    <p>ЗАВЕРШЕНИЕ <br /> ВЕЧЕРА</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProgramForDay