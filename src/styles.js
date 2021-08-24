import styled from 'styled-components'


export const bps = {
  bp1: '@media screen and (max-width: 1265px)',
  bp2: '@media screen and (max-width: 1077px)',
  bp3: '@media screen and (max-width: 987px)',
  bp4: '@media screen and (max-width: 687px)'
}

export const AppContainer = styled('div')`
  display: flex;
  justify-content: center;
  height: 100%;
`

export const MainMenuContainer = styled('div')`
  background-color: lightgreen;
  padding: 0px 12px;
  height: 100%;
  width: 251px;

  ${bps.bp1} {
    width: 64px;
  }
`

export const PrimaryContainer = styled('div')`
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
`

export const AddsContainer = styled('div')`
  background-color: lightsalmon;
  padding-left: 20px;
  width: 330px;

  ${bps.bp2} {
    width: 270px;
  }

  ${bps.bp3} {
    display: none;
  }
`