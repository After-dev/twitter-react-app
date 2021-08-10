import React from 'react'
import {
  Container,
  Img
} from './styles'

import userImg from'assets/imgs/user_img.jpg'


export default function UserImg ({ img=userImg, size='40px', hoverEffect=false }) {
  return (
    <Container size={size} hoverEffect={hoverEffect}>
      <Img src={img} />
    </Container>
  )
}