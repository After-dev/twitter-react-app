import styled from 'styled-components'


export const Container = styled('div')`
  background-color: orange;
  border: 1px solid rgb(207, 217, 222);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const TweetHeaderContainer = styled('div')`
  background-color: red;
  display: flex;
  overflow: hidden;
  margin-top: 12px;
  margin-left: 12px;
  margin-right: 12px;
`

export const TweetHeaderUserInfo = styled('div')`
  overflow: hidden;
  display: flex;
  overflow: hidden;
  min-width: 0;

  & > div:nth-child(1) {
    margin-right: 4px;
  }
`

export const TweetHeaderPrimary = styled('span')`
  color: black;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
`

export const TweetHeaderSecondary = styled('span')`
  color: grey;
  font-size: 15px;
  margin-left: 4px;
`

export const TweetTextContainer = styled('div')`
  background-color: blue;
  margin-bottom: 12px;
  margin-left: 12px;
  margin-right: 12px;
`

export const TweetText = styled('span')`
  color: black;
  font-size: 15px;
  overflow-wrap: break-word;
`