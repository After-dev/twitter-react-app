import styled from 'styled-components'


export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const Header = styled('div')`
  border-bottom: 1px solid rgb(239, 243, 244);
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 53px;
  padding: 0px 16px;
`

export const HeaderText = styled('span')`
  color: black;
  font-size: 20px;
  font-weight: 700;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ScrollContainer = styled('div')`
  height: 100%;
  overflow: scroll;
`

export const TweetsContainer = styled('div')`
  border-top: 1px solid rgb(239, 243, 244);
`