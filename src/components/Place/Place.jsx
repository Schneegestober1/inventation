import styles from '../Place/place.module.scss'

const Place = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <div className={styles.line} />
        <h2 className={styles.heading}>МЕСТО ПРОВЕДЕНИЯ</h2>
        <div className={styles.line} />
      </div>
      <h3 className={styles.headingSec}>Усадьба Гребнево</h3>
      <p className={styles.text}>Адрес: Московская обл., городской округ Щёлково, усадьба Гребнево</p>
      <div>
        <img className={styles.img} src="public/images/usadba_grebnevo_general_view-new.jpg" alt="usadba_grebnevo" />
      </div>
      <h2 className={styles.heading}>КАК ДОБРАТЬСЯ</h2>
      <p className={styles.text}>Для вашего удобства мы подготовили карту. Надеемся, что вы легко найдете место проведения свадьбы и порадуете нас своим присутствием!</p>
    </div>
  )
}

export default Place
