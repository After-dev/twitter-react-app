import { useState } from 'react'
import {
  Container,
  Header,
  HeaderText,
  ScrollContainer,
  TweetsContainer
} from './styles'
import Tweet from 'components/Tweet'
import TweetForm from 'components/TweetForm'

import userImg from'assets/imgs/user_img.jpg'


export default function Home (){
  const [tweets, setTweets] = useState([
    {
      userName: 'TheBleis94',
      userAlias: '@TheBleis94',
      text: 'Esto es el texto de un tweet 1',
      medias: [userImg],
      date: 1629823723000,
      device: 'iPhone',
      comments: 1,
      likes: 2,
      retweets: 3
    },
    {
      userName: 'TheBleis94',
      userAlias: '@TheBleis94',
      text: 'Esto es el texto de un tweet 2',
      medias: [userImg,userImg],
      date: 1629823723000,
      comments: 4,
      likes: 5,
      retweets: 6
    },
    {
      userName: 'TheBleis94',
      userAlias: '@TheBleis94',
      text: 'Esto es el texto de un tweet 3',
      medias: [userImg,userImg,userImg],
      date: 1629823723000,
      device: 'iPhone',
      comments: 7,
      likes: 8,
      retweets: 9
    },
    {
      userName: 'TheBleis94',
      userAlias: '@TheBleis94',
      text: 'Esto es el texto de un tweet 4',
      medias: [userImg,userImg,userImg,userImg],
      date: 1629823723000,
      device: 'iPhone',
      comments: 10,
      likes: 11,
      retweets: 12
    }
  ])

  return(
    <Container>
      <Header>
        <HeaderText>Inicio</HeaderText>
      </Header>
      <ScrollContainer>
        <TweetForm />
        <TweetsContainer>
          {
            tweets.map(tweet => {
              return <Tweet
                key={tweet.userName+tweet.text}
                user={tweet.userName}
                tweetDate={tweet.date}
                tweetText={tweet.text}
                tweetMedias={tweet.medias}
                commentNum={tweet.comments}
                likeNum={tweet.likes}
                retweetNum={tweet.retweets}
                />
            })
          }
        </TweetsContainer>
      </ScrollContainer>
    </Container>
  )
}