import 'App.css'
import {
  AppContainer,
  MainMenuContainer,
  PrimaryContainer,
  AddsContainer
} from './styles'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import MainMenu from 'components/MainMenu'
import AddsMenu from 'components/AddsMenu'
import Home from 'pages/Home'

import userImg from'assets/imgs/user_img.jpg'

function App() {

  function handleOnClick() {
    console.log('Click')
    alert('Click')
  }

  //Continuar con react-route

  return (
    <Router>
      <AppContainer>
        <MainMenuContainer>
          <MainMenu />
        </MainMenuContainer>
        <PrimaryContainer>
          <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/explore' element={<span>Explorar</span>}/>
            <Route path='/notifications' element={<span>Notificaciones</span>}/>
            <Route path='/messages' element={<span>Mensajes</span>}/>
            <Route path='/i/bookmarks' element={<span>Guardados</span>}/>
            <Route path='/:user/lists' element={<span>Listas</span>}/>
            <Route path='/:user' element={<span>Perfil de usuario</span>}/>
            <Route path='*' element={<span>Error</span>}/>
          </Routes>
        </PrimaryContainer>
        <AddsContainer>
          <AddsMenu showSearch/>
        </AddsContainer>
      </AppContainer>
    </Router>
  )
}

export default App;
