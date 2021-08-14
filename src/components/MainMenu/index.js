import { useState } from 'react'
import {
  Container,
  ContainerActions,
  ContainerProfile,
  ProfileInfoContainer,
  ProfileUserInfoContainer,
  UserName,
  UserAlias
} from './styles'
import Button from 'components/Button'
import UserImg from 'components/UserImg'

import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg'
import { ReactComponent as Explore } from 'assets/icons/explore.svg'
import { ReactComponent as Bell } from 'assets/icons/bell.svg'
import { ReactComponent as Letter } from 'assets/icons/letter.svg'
import { ReactComponent as Bookmarks } from 'assets/icons/bookmarks.svg'
import { ReactComponent as List } from 'assets/icons/list.svg'
import { ReactComponent as User } from 'assets/icons/user.svg'
import { ReactComponent as Options } from 'assets/icons/options.svg'
import { ReactComponent as Etc } from 'assets/icons/etc.svg'
import { ReactComponent as Tweetear } from 'assets/icons/tweetear.svg'


export default function Home () {
  const [itemActive, setItemActive] = useState(0)
  const [items] = useState([
    {text: 'Inicio', icon: <HomeIcon/>, link: 'home'},
    {text: 'Explorar', icon: <Explore/>, link: 'explore'},
    {text: 'Notificaciones', icon: <Bell/>, link: 'notifications'},
    {text: 'Mensajes', icon: <Letter/>, link: 'messages'},
    {text: 'Guardados', icon: <Bookmarks/>, link: 'bookmarks'},
    {text: 'Listas', icon: <List/>, link: 'lists'},
    {text: 'Perfil', icon: <User/>, link: ''},
    {text: 'Más opciones', icon: <Options/>, link: ''}
  ])

  function handleActionClick (linkIndex) {
    setItemActive(linkIndex)
  }

  return (
    <Container>
      <ContainerActions>
        <Button
          icon={<Logo />}
          iconSize='28px'
          defaultColor='rgba(29,161,242,1.0)'
          padding='8px'
          handleClick={() => handleActionClick(0)}
          hoverEffect
          hoverBackgroundColor='rgba(29,161,242,0.1)'
          />
        <br/>
        {
          items.map((item,i) => {
            let itemProps = {
              key: i,
              icon: item.icon,
              iconSize: '28px',
              text: item.text,
              textSize: '20px',
              paddingText: '0px 16px',
              padding: '12px',
              hoverEffect: true,
              hoverColor: 'rgba(29,161,242,1.0)',
              hoverBackgroundColor: 'rgba(29,161,242,0.1)'
            }

            if (i === itemActive){
              itemProps['defaultColor'] = 'rgba(29,161,242,1.0)'
            }

            return (
              <>
                <Button
                  {...itemProps}
                  handleClick={() => handleActionClick(i)}
                  />
                <br/>
              </>
            )
          })
        }

        <Button
          backgroundColor='rgba(29,161,242,1.0)'
          text='Twittear'
          icon={<Tweetear />}
          defaultColor='white'
          iconSize='24px'
          textSize='15px'
          padding='12px'
          paddingText='0px 70px'
          shadowEffect={true}
          />
      </ContainerActions>
      <ContainerProfile>
        <UserImg size='40px' />
        <ProfileInfoContainer>
          <ProfileUserInfoContainer>
            <UserName>aaaaaaaaaaaaasssaaaaaa</UserName>
            <UserAlias>@bbb</UserAlias>
          </ProfileUserInfoContainer>
          <Button
            icon={<Etc/>}
            iconSize='19px'
            />
        </ProfileInfoContainer>
      </ContainerProfile>
    </Container>
  )
}