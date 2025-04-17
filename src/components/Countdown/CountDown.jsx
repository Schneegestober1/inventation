import styles from '../Countdown/countDown.module.scss'
import ImageCard from '../ImageCard/ImageCard'

export const CountDown = () => {
	const wrapperStyle = {
		width: '100%',
		height: '300px',
		borderRadius: 'none',
		overflow: 'hidden',
	};
	
	const imageStyle = {
		objectFit: 'cover',
	};

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
			<ImageCard src={'public/images/333.png'} wrapperStyle={wrapperStyle} imageStyle={imageStyle}/>
		</section>
	)
}

export default CountDown