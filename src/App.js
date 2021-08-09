import 'App.css'
import Button from 'components/Button'

import { ReactComponent as Home } from 'assets/icons/home.svg'

function App() {

  function handleOnClick() {
    console.log('Click')
    alert('Click')
  }

  return (
    <Button
      text='aaa'
      icon={<Home/>}
      defaultColor='blue'
      iconSize='26px'
      padding='10px'
      paddingText='0 50px'
      hoverEffect={true}
      hoverBackgroundColor='green'
      hoverColor='black'
      handleClick={handleOnClick}
      notificationNum='0'
      notificationColor='blue'
      />
  )
}

export default App;
