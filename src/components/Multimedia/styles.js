import styled from 'styled-components'


export const Container = styled('div')`
  border: 1px solid rgb(207, 217, 222);
  border-radius: 16px;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
`

export const ContainerPad = styled('div')`
  padding-bottom: 50%;
`

export const MediasContainer = styled('div')`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
`

export const MediasLeftContainer = styled('div')`
  margin-right: 1px;
  height: 100%;
  width: 50%;
`

export const MediasRightContainer = styled('div')`
  margin-left: 1px;
  height: 100%;
  width: 50%;
`

export const MediasTopContainer = styled('div')`
  margin-bottom: 2px;
  height: 50%;
  width: 100%;
`

export const MediasBottomContainer = styled('div')`
  margin-top: 2px;
  height: 50%;
  width: 100%;
`

export const MediaLink = styled('a')`
  display: block;
  height: 100%;
  width: 100%;
`

export const Media = styled('img')`
  height: 100%;
  width: 100%;
`