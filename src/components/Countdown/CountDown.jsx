import { useEffect, useState } from 'react'
import styles from '../Countdown/countDown.module.scss'

export const CountDown = () => {
	const countDownDate = new Date('Aug 15, 2025 15:00:00').getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({
        days: formatTime(days),
        hours: formatTime(hours),
        minutes: formatTime(minutes),
        seconds: formatTime(seconds)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [countDownDate])

	function formatTime(unit) {
	return unit < 10 ? '0' + unit : unit.toString()
	}

	function getPlural(number, one, few, many) {
		const n = Math.abs(number) % 100
		const n1 = n % 10
	
		if (n > 10 && n < 20) return many
		if (n1 > 1 && n1 < 5) return few
		if (n1 === 1) return one
		return many
	}
	
	return (
		<section className={styles.container}>
			<h2>ДО НАШЕЙ СВАДЬБЫ ОСТАЛОСЬ:</h2>
			<div className={styles.countDownBox}>
				<div className={styles.countDown}>{timeLeft.days} <span>{getPlural(+timeLeft.days, 'день', 'дня', 'дней')}</span></div>
				<div className={styles.countDownLine}></div>
				<div className={styles.countDown}>{timeLeft.hours} <span>{getPlural(+timeLeft.hours, 'час', 'часа', 'часов')}</span></div>
				<div className={styles.countDownLine}></div>
				<div className={styles.countDown}>{timeLeft.minutes} <span>{getPlural(+timeLeft.minutes, 'минута', 'минуты', 'минут')}</span></div>
				<div className={styles.countDownLine}></div>
				<div className={styles.countDown}>{timeLeft.seconds} <span>{getPlural(+timeLeft.seconds, 'секунда', 'секунды', 'секунд')}</span></div>
			</div>
		</section>
	)
}

export default CountDown