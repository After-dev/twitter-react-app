import 'App.css'
import {
  AppContainer,
  MainMenuContainer,
  PrimaryContainer,
  AddsContainer
} from './styles'
import MainMenu from 'components/MainMenu'
import AddsMenu from 'components/AddsMenu'
import Home from 'pages/Home'

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
        <Home />
      </PrimaryContainer>
      <AddsContainer>
        <AddsMenu showSearch/>
      </AddsContainer>
    </AppContainer>
  )
}

export default App;
