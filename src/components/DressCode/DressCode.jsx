import styles from '../DressCode/dressCode.module.scss'

export const DressCode = () => {

	return (
		<section className={styles.container}>
			<h2 className={styles.title}>ДРЕСС-КОД</h2>
			<p className={styles.text1}>Для нас самое главное — ваше присутствие, поэтому мы не устанавливаем строгий дресс-код.</p>
			<p className={styles.text1}> Однако, будем благодарны, если вы поддержите стиль и цветовую гамму нашей свадьбы, чтобы сделать праздник красивым и гармоничным.</p>
			<h3 className={styles.mainColorsTitle}>ОСНОВНЫЕ ЦВЕТА</h3>
			<div className={styles.colorsBox}>
				<div className={styles.color}></div>
				<div className={styles.color}></div>
			</div> 
			<h3 className={styles.mainColorsTitle}>ДОПОЛНИТЕЛЬНЫЕ ЦВЕТА</h3>
			<h4 className={styles.extraColorTitle}>И ИХ ОТТЕНКИ</h4>
			<div className={styles.colorsBox}>
				<div className={styles.colorExtra1}></div>
				<div className={styles.colorExtra}></div>
				<div className={styles.colorExtra}></div>
				<div className={styles.colorExtra}></div>
			</div> 
			<div className={styles.colorsBox}>
				<div className={styles.colorExtra}></div>
				<div className={styles.colorExtra1}></div>
				<div className={styles.colorExtra1}></div>
				<div className={styles.colorExtra1}></div>
			</div> 

			<h2 className={styles.title}>ПОЖЕЛАНИЯ</h2>
			<h3>-ГОРЬКО-</h3>
			<p className={styles.text1}>Будем благодарны, если вы воздержитесь от частых криков «Горько» и белого цвета в наряде у дам. <br />В белом только невеста!</p>
			<h3>-ПОДАРКИ -</h3>
			<p className={styles.text1}>Чтобы наши руки были свободны для объятий, мы будем рады легким подаркам в конвертах.</p>
			<div className={styles.orgBox}>
				<h2>ОРГАНИЗАЦИОННЫЕ МОМЕНТЫ</h2>
				<p>Если хотите устроить нам творческий подарок или сюрприз, свяжитесь с ведущим нашего мероприятия:</p>
				<h3><strong>Андрей</strong></h3>
				<a className={styles.phoneNumber} href="tel:+79776525099">8 (977) 652-50-99</a>
			</div>
		</section>
	)
}

export default DressCode