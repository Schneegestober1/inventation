import DatePicker from './components/DatePicker/DatePicker'
import Header from './components/Header/Header'
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
      <Place />
      <YandexMap />
      <ProgramForDay />
    </>
  )
}

export default App
