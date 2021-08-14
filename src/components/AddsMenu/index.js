import { useState } from 'react'
import {
  Container,
  ContainerScroll,
  ContainerAdds,
  PanelContainer,
  PanelTitle,
  PanelItemPad,
  PanelLink,
  PanelAdd,
  PanelUserItem,
  PanelUserInfoContainer,
  ProfileUserInfoContainer,
  UserName,
  UserAlias,
  PanelCopyright,
  CopyrightLink
} from './styles'
import Button from 'components/Button'
import SearchBar from 'components/SearchBar'
import UserImg from 'components/UserImg'

import userImg from'assets/imgs/user_img.jpg'


export default function AddsMenu ({showSearch}) {
  const [adds, setAdds] = useState([
    {
      title: 'COVID-19 · EN DIRECTO',
      description: 'Esto es la descripción de la noticia 1'
    },
    {
      title: 'Tendencia en España',
      description: 'Esto es la descripción de la noticia 2'
    },
    {
      title: 'TITULO 3 · Ayer',
      description: 'Esto es la descripción de la noticia 3'
    }
  ])
  const [users, setUsers] = useState([
    {
      name: 'Ibai',
      alias: 'IbaiLlanos',
      img: userImg
    },
    {
      name: 'Lumie',
      alias: 'lumie_lumie',
      img: userImg
    }
  ])

  return (
    <Container>
      {showSearch && <SearchBar />}
      <ContainerScroll>
        <ContainerAdds>
          <PanelContainer>
            <PanelTitle>Qué está pasando</PanelTitle>
            {
              adds.map(add => {
                return <PanelItemPad key={add.title}>
                  <PanelAdd>
                    <span>{add.title}</span>
                    <span>{add.description}</span>
                </PanelAdd></PanelItemPad>
              })
            }
          </PanelContainer>
          <PanelContainer>
            <PanelTitle>A quién seguir</PanelTitle>
            {
              users.map(user => {
                return <PanelItemPad key={user.alias}>
                    <PanelUserItem>
                      <UserImg
                        img={user.img}
                        size='48px'
                        hoverEffect={true}
                        />
                      <PanelUserInfoContainer>
                        <ProfileUserInfoContainer>
                          <UserName>{user.name}</UserName>
                          <UserAlias>@{user.alias}</UserAlias>
                        </ProfileUserInfoContainer>
                        <Button
                          text='Seguir'
                          backgroundColor='black'
                          defaultColor='white'
                          textSize='14px'
                          padding='6px'
                          paddingText='0px 10px'
                          shadowEffect
                          />
                      </PanelUserInfoContainer>
                    </PanelUserItem>
                  </PanelItemPad>
              })
            }
            <PanelLink>Mostrar más</PanelLink>
          </PanelContainer>
        </ContainerAdds>
        <PanelCopyright>
          <CopyrightLink href='https://twitter.com/tos' target='_blank'>
            Condiciones de Servicio
          </CopyrightLink>
          <CopyrightLink href='https://twitter.com/privacy' target='_blank'>
            Política de Privacidad
          </CopyrightLink>
          <CopyrightLink href='https://support.twitter.com/articles/20170514'
            target='_blank'>
            Política de cookies
          </CopyrightLink>
          <CopyrightLink href='https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo'
            target='_blank'>
            Información de anuncios
          </CopyrightLink>
          <CopyrightLink>
            Mas opciones ...
          </CopyrightLink>
          © 2021 Twitter, Inc.
        </PanelCopyright>
      </ContainerScroll>
    </Container>
  )
}