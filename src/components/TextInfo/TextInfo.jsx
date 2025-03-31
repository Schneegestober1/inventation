import styles from '../../components/TextInfo/text-info.module.scss'
const TextInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <h1 className={styles.heading}>ДОРОГИЕ <br /> РОДНЫЕ И ДРУЗЬЯ!</h1>
      <p className={styles.text}>Приглашаем вас разделить с нами радость особенного для нас события и стать частью нашей семейной истории!</p>
      <p className={styles.text}>В этот волшебный день мы скажем друг другу «Да!» и соединим наши сердца и судьбы в окружении самых близких и родных людей.</p>
    </div>
  )
}

export default TextInfo