import './App.css'
import logo from './assets/cpu-logo.svg'
import person_boy from './assets/person-boy.svg'

import BotBar from './components/BotBar'
import CardContainer from './components/CardContainer'
import ImageCard from './components/ImageCard'
import MainContainer from './components/MainContainer'
import TextCard from './components/TextCard'
import TopBar from './components/TopBar'

function App() {

  return (
    <div className="App">
      <MainContainer>

        <TopBar logo={logo} title="Portfolio Home" />

        <CardContainer>
          <ImageCard
            image_file={person_boy} />
          <TextCard
            title="title text"
            text_body="text body" />
        </CardContainer>

        <CardContainer>
          <ImageCard
            image_file={person_boy} />
          <TextCard title="title text"
            text_body="text body" />
          <TextCard title="title text"
            text_body="text body" />
        </CardContainer>

        <CardContainer>
          <TextCard title="title text"
            text_body="text body" />
        </CardContainer>

        <BotBar />

      </MainContainer>
    </div>
  )
}

export default App
