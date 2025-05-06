import CountDown from './components/Countdown/CountDown'
import DatePicker from './components/DatePicker/DatePicker'
import DressCode from './components/DressCode/DressCode'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import ImageCard from './components/ImageCard/ImageCard'
import Line from './components/Line/Line'
import MainImage from './components/MainImage/MainImage'
import YandexMap from './components/MapComponent/MapComponent'
import Place from './components/Place/Place'
import ProgramForDay from './components/ProgramForDay/ProgramForDay'
import TextInfo from './components/TextInfo/TextInfo'

function App() {
    const wrapperStyle = {
      width: '100%',
      height: '260px',
      borderRadius: 'none',
      overflow: 'hidden',
    };
    
    const imageStyle = {
      objectFit: 'cover',
    };

    const imageStyle1 = {
      objectFit: 'contain',
    };

  return (
    <>
      <Header />
      <MainImage />
      <TextInfo />
      <DatePicker />
      <Line />
      <Place />
      <YandexMap />
      <Line />
      <ProgramForDay />
      <Line />
      <DressCode />
      <CountDown />
      <ImageCard src={'public/images/333.png'} wrapperStyle={wrapperStyle} imageStyle={imageStyle}/>
      <Form />
      <ImageCard src={'public/images/_1.jpg'} wrapperStyle={wrapperStyle} imageStyle={imageStyle1}/>
    </>
  )
}

export default App
