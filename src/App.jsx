import './App.css'
import logo from './assets/icons/cpu-logo.svg'
import person_boy from './assets/icons/person-boy.svg'
import grad_hat from './assets/icons/grad-hat.svg'
import terminal_icon from './assets/icons/terminal-icon-2.svg'
import globe_link from './assets/icons/globe-link.svg'
import star_icon from './assets/icons/star-icon.svg'
import bg_bot_skyline from './assets/bg/bg-bot-skyline.png'


import BotBar from './components/BotBar'
import ImageCard from './components/ImageCard'
import TextCard from './components/TextCard'
import TopBar from './components/TopBar'

function App() {

  return (
    <div className="App">
      <div className='app-container'>

        <TopBar logo={logo} title="Portfolio" />

        <div className="body-container">

          <div id="intro" className="grid-container">
            <div className='flex-container-row'>
              <ImageCard
                image_file={person_boy}
                width="80px"
                alt_name="profile_image" />
              <TextCard
                title="Kyung Min Song"
                text_body="Full Stack Developer" />
            </div>
            <TextCard title="title text"
              text_body="text body" />
          </div>

          <div id="experience" className="grid-container">
            <div className='flex-container-row'>
              <ImageCard
                image_file={terminal_icon}
                width="35px"
                alt_name="skills_section" />
              <TextCard title="title text"
                text_body="text body" />
            </div>
            <TextCard title="title text"
              text_body="text body" />
          </div>

          <div id="skills" className="grid-container">
            <div className='flex-container-row'>
              <ImageCard
                image_file={star_icon}
                width="35px"
                alt_name="skills_section" />
              <TextCard title="title text"
                text_body="text body" />
            </div>
          </div>

          <div id="education" className="grid-container">
            <div className='flex-container-row'>
              <ImageCard
                image_file={grad_hat}
                width="40px"
                alt_name="skills_section" />
              <TextCard title="title text"
                text_body="text body" />
            </div>

            <TextCard title="title text"
              text_body="text body" />

          </div>

          <div className="grid-container">
            <div className='flex-container-row'>
              <ImageCard
                image_file={globe_link}
                width="35px"
                alt_name="skills_section" />
              <TextCard title="title text"
                text_body="text body" />
            </div>
          </div>
        </div>

        <BotBar
          image_file={bg_bot_skyline}
          alt_name="bottom-bar-background" />
      </div>

    </div>
  )
}

export default App
