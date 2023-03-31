import './App.css'
import logo from './assets/cpu-logo.svg'
import person_boy from './assets/person-boy.svg'
import grad_hat from './assets/grad-hat.svg'

import BotBar from './components/BotBar'
import ImageCard from './components/ImageCard'
import MainContainer from './components/MainContainer'
import TextCard from './components/TextCard'
import TopBar from './components/TopBar'

function App() {

  return (
    <div className="App">
      <MainContainer>

        <TopBar logo={logo} title="Portfolio Home" />

        <div id="intro" className="">
          <ImageCard
            image_file={person_boy}
            width="70px"
            alt_name="profile_image" />
          <TextCard
            title="title text"
            text_body="text body" />
        </div>

        <div id="skills" className="">
          <ImageCard
            image_file={person_boy}
            width="40px"
            alt_name="skills_section" />
          <TextCard title="title text"
            text_body="text body" />
          <TextCard title="title text"
            text_body="text body" />
        </div>

        <div id="education" className="">
          <ImageCard
            image_file={grad_hat}
            width="40px"
            alt_name="skills_section" />
          <TextCard title="title text"
            text_body="text body" />
          <TextCard title="title text"
            text_body="text body" />
        </div>

        <div className="">
          <TextCard title="title text"
            text_body="text body" />
        </div>

        <BotBar />

      </MainContainer>
    </div>
  )
}

export default App
