import CountDown from './components/Countdown/CountDown'
import DatePicker from './components/DatePicker/DatePicker'
import DressCode from './components/DressCode/DressCode'
import Header from './components/Header/Header'
import Line from './components/Line/Line'
import MainImage from './components/MainImage/MainImage'
import YandexMap from './components/MapComponent/MapComponent'
import Place from './components/Place/Place'
import ProgramForDay from './components/ProgramForDay/ProgramForDay'
import TextInfo from './components/TextInfo/TextInfo'

function App() {

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
    </>
  )
}

export default App
