import { Volume2, VolumeOff } from 'lucide-react'
import styles from '../../components/Header/header.module.scss'
import { useRef, useState } from 'react'

const Header = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlay = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause()
        } else {
          audioRef.current.play()
        }
      }
      setIsPlaying(!isPlaying)
    }
    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <div>
            <h1 className={styles.heading}>ПРИГЛАШЕНИЕ</h1>
          </div>
          <div className={styles.tools}>
              <audio ref={audioRef} src="/audio/Niall_Horan_-_Black_And_White_68745396.mp3"></audio>
            {isPlaying ? (
              <Volume2 size={28} onClick={togglePlay} />
            ) : (
              <VolumeOff size={28} onClick={togglePlay} />
            )}
          </div>
        </div>
        
      </header>
    )
}

export default Header