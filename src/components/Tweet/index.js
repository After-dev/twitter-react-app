import {useEffect, useState} from 'react'
import {
  Container,
  ContainerTweet,
  Status,
  StatusText,
  TweetContent,
  TweetDetail,
  TweetHeader,
  TweetHeaderInfoContainer,
  TweetHeaderPrimary,
  TweetHeaderSecondary,
  TweetHeaderUserInfo,
  TweetText,
  TweetTextContainer,
  TweetMediaContainer,
  TweetRefContainer,
  TweetButtonsContainer
} from './styles'
import Button from 'components/Button'
import ButtonCounter from 'components/ButtonCounter'
import ExternalTweet from 'components/ExternalTweet'
import Multimedia from 'components/Multimedia'
import UserImg from 'components/UserImg'

import dateDiff from 'utils'

import { ReactComponent as Comment } from 'assets/icons/comment.svg'
import { ReactComponent as HeartOn } from 'assets/icons/heartOn.svg'
import { ReactComponent as HeartOff } from 'assets/icons/heartOff.svg'
import { ReactComponent as Retweet } from 'assets/icons/retweet.svg'
import { ReactComponent as Share } from 'assets/icons/share.svg'
import { ReactComponent as Etc } from 'assets/icons/etc.svg'
import userImg from'assets/imgs/user_img.jpg'

export default function Tweet ({user, likedBy, retweetedBy,
  tweetDate, tweetText, tweetMedias, tweetRef, commented,
  retweeted, liked, commentNum, retweetNum, likeNum}) {
  const [useralias, setUseralias] = useState('')
  const [userimg, setUserimg] = useState('')
  const [username, setUsername] = useState('')
  const [date, setDate] = useState('')
  const [dateToShow, setDateToShow] = useState('')

  useEffect(() => {
    // Calcular diferencias de tiempo del tweet
    const {dateStr, dateDiffStr} = dateDiff(tweetDate)
    setDate(dateStr)
    setDateToShow(dateDiffStr)

    // Solicitar datos de usuario con fetch
    // fetch(...)
    if (user) {
      setUsername('fpuentes')
      setUseralias('fpuentes')
      setUserimg(userImg)
    }
  }, [])

  return (
    <Container>
      <ContainerTweet>
        {(likedBy || retweetedBy) &&
          <Status>
            {likedBy ? <HeartOn />
             : <Retweet />}
            <StatusText href={`https://twitter.com/${likedBy || retweetedBy}`}>
              {likedBy ? `${likedBy || retweetedBy} indicó que le gusta`
               : `${likedBy || retweetedBy} lo retwitteó`}
            </StatusText>
          </Status>
        }
        <TweetContent>
          <UserImg
            src={userimg}
            size='48px'
            hoverEffect={true} />
          <TweetDetail>
            <TweetHeader>
              <TweetHeaderInfoContainer>
                <TweetHeaderUserInfo>
                  <TweetHeaderPrimary
                    href={`https://twitter.com/${useralias}`}>
                      {username}
                  </TweetHeaderPrimary>
                  <TweetHeaderSecondary>@{useralias}</TweetHeaderSecondary>
                </TweetHeaderUserInfo>
                <TweetHeaderSecondary>·</TweetHeaderSecondary>
                <TweetHeaderSecondary title={date}>
                  {dateToShow}
                </TweetHeaderSecondary>
              </TweetHeaderInfoContainer>
              <Button
                icon={<Etc />}
                iconSize='18px'
                hoverEffect={true}
                hoverBackgroundColor='green'
                />
            </TweetHeader>
            {tweetText &&
              <TweetTextContainer>
                <TweetText>{tweetText}</TweetText>
              </TweetTextContainer>}
            {tweetMedias &&
              <TweetMediaContainer>
                <Multimedia
                  medias={tweetMedias}/>
              </TweetMediaContainer>}
            {tweetRef &&
              <TweetRefContainer>
                <ExternalTweet tweetRef={tweetRef} />
              </TweetRefContainer>}
            <TweetButtonsContainer>
              <ButtonCounter
                icon={<Comment />}
                initialCount={commentNum}
                actived={commented}
                defaultColor='grey'
                hoverEffect
                hoverColor='rgba(29,161,242,1.0)'
                hoverBackgroundColor='rgba(29,161,242,0.1)'
                />
              <ButtonCounter
                icon={<Retweet />}
                initialCount={retweetNum}
                actived={retweeted}
                defaultColor='grey'
                hoverEffect
                hoverColor='rgba(23,191,99,1.0)'
                hoverBackgroundColor='rgba(23,191,99,0.1)'
                />
              <ButtonCounter
                icon={<HeartOff />}
                actived={liked}
                initialCount={likeNum}
                defaultColor='grey'
                hoverEffect
                hoverColor='rgba(224,36,94,1.0)'
                hoverBackgroundColor='rgba(224,36,94,0.1)'
                />
              <Button
                icon={<Share />}
                defaultColor='grey'
                hoverEffect
                hoverColor='rgba(29,161,242,1.0)'
                hoverBackgroundColor='rgba(29,161,242,0.1)'
                iconSize='19px'
                padding='8px'
                />
            </TweetButtonsContainer>
          </TweetDetail>
        </TweetContent>
      </ContainerTweet>
    </Container>
  )
}