import 'App.css'
import {
  AppContainer,
  MainMenuContainer,
  PrimaryContainer,
  AddsContainer
} from './styles'
import MainMenu from 'components/MainMenu'

import { ReactComponent as Homee } from 'assets/icons/home.svg'
import { ReactComponent as Etc } from 'assets/icons/etc.svg'
import userImg from'assets/imgs/user_img.jpg'

function App() {

  function handleOnClick() {
    console.log('Click')
    alert('Click')
  }

  return (
    <AppContainer>
      <MainMenuContainer>
        <MainMenu />
      </MainMenuContainer>
      <PrimaryContainer>
        {/* <Home /> */}
      </PrimaryContainer>
      <AddsContainer>
        
      </AddsContainer>
    </AppContainer>
  )
}

export default App;
