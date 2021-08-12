import {
  Container,
  ContainerPad,
  MediasContainer,
  MediasLeftContainer,
  MediasRightContainer,
  MediasTopContainer,
  MediasBottomContainer,
  MediaLink,
  Media
} from './styles'

export default function Multimedia({medias}) {
  const insertMediaLink = (media) => {
    return (
      <MediaLink>
        <Media src={media} />
      </MediaLink>)
  }

  return (
    <Container>
      <ContainerPad />
      <MediasContainer>
        {medias.length == 1 ?
          <MediaLink>
            <Media src={medias[0]} />
          </MediaLink>
         : medias.length == 2 ?
          <>
            <MediasLeftContainer>
              <MediaLink>
                <Media src={medias[0]} />
              </MediaLink>
            </MediasLeftContainer>
            <MediasRightContainer>
              <MediaLink>
                <Media src={medias[1]} />
              </MediaLink>
            </MediasRightContainer>
          </>
         : medias.length == 3 ?
          <>
            <MediasLeftContainer>
              <MediaLink>
                <Media src={medias[0]} />
              </MediaLink>
            </MediasLeftContainer>
            <MediasRightContainer>
              <MediasTopContainer>
                <MediaLink>
                  <Media src={medias[1]} />
                </MediaLink>
              </MediasTopContainer>
              <MediasBottomContainer>
                <MediaLink>
                  <Media src={medias[2]} />
                </MediaLink>
              </MediasBottomContainer>
            </MediasRightContainer>
          </>
         :
          <>
            <MediasLeftContainer>
              <MediasTopContainer>
                <MediaLink>
                  <Media src={medias[0]} />
                </MediaLink>
              </MediasTopContainer>
              <MediasBottomContainer>
                <MediaLink>
                  <Media src={medias[1]} />
                </MediaLink>
              </MediasBottomContainer>
            </MediasLeftContainer>
            <MediasRightContainer>
              <MediasTopContainer>
                <MediaLink>
                  <Media src={medias[2]} />
                </MediaLink>
              </MediasTopContainer>
              <MediasBottomContainer>
                <MediaLink>
                  <Media src={medias[3]} />
                </MediaLink>
              </MediasBottomContainer>
            </MediasRightContainer>
          </>
        }
      </MediasContainer>
    </Container>
  )
}