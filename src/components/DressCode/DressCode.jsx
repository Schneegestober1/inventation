import styles from '../DressCode/dressCode.module.scss'

export const DressCode = () => {

	return (
		<section className={styles.container}>
			<h2 className={styles.title}>ДРЕСС-КОД</h2>
			<p className={styles.text1}>Мы очень старались сделать праздник красивым и гармоничным.<br className={styles.br} />Будем благодарны, если вы поддержите стиль и цветовую гамму нашей свадьбы!</p>
			<h3>ЛЕДИ</h3>
			<p className={styles.text}>Образы в пастельных оттенках: </p>
			<div className={styles.rectanglesBox}>
				<div className={styles.rectangleWomen}></div>
				<div className={styles.rectangleWomen}></div>
				<div className={styles.rectangleWomen}></div>
			</div>
			<p className={styles.text}>Разные оттенки розового и зеленого цвета</p>
			<h3>ДЖЕНТЕЛЬМЕНЫ</h3>
			<p className={styles.text}>Образы в оттенках:</p>
			<div className={styles.rectanglesBox}>
				<div className={styles.rectangleMen}></div>
				<div className={styles.rectangleMen}></div>
				<div className={styles.rectangleMen}></div>
			</div>
			<p className={styles.text}>Черный, голубой, зеленый</p>
			<h2 className={styles.title}>ПОЖЕЛАНИЯ</h2>
			<h3>-ГОРЬКО-</h3>
			<p className={styles.text1}>Будем благодарны, если вы воздержитесь от частых криков «Горько» и белого цвета в наряде у дам. <br />В белом только невеста!</p>
			<h3>-ПОДАРКИ -</h3>
			<p className={styles.text1}>Чтобы наши руки были свободны для объятий, мы будем рады легким подаркам в конвертах.</p>
			<h3>-ЦВЕТЫ-</h3>
			<p className={styles.text1}>Мы знаем, что на свадьбах принято дарить цветы, но мы не успеем насладиться их красотой, ведь они так быстро завянут.</p>
			<div className={styles.orgBox}>
				<h2>ОРГАНИЗАЦИОННЫЕ МОМЕНТЫ</h2>
				<p>Если хотите устроить нам творческий подарок или сюрприз, свяжитесь с ведущим нашего мероприятия:</p>
				<h3><strong>Александр</strong></h3>
				<a className={styles.phoneNumber} href="tel:+79689156151">8 (968) 915-61-51</a>
			</div>
		</section>
	)
}

export default DressCode