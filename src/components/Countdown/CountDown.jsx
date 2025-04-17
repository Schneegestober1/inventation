import styles from '../Countdown/countDown.module.scss'

export const CountDown = () => {


	return (
		<section className={styles.container}>
			<h2>ДО НАШЕЙ СВАДЬБЫ ОСТАЛОСЬ:</h2>
			<div className={styles.countDownBox}>
				<div className={styles.countDown}>22 <span>дня</span></div>
				<div className={styles.countDownLine}></div>
				<div className={styles.countDown}>22 <span>часа</span></div>
				<div className={styles.countDownLine}></div>
				<div className={styles.countDown}>05 <span>минут</span></div>
				<div className={styles.countDownLine}></div>
				<div className={styles.countDown}>31 <span>секунда</span></div>
			</div>
		</section>
	)
}

export default CountDown