import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt="detail-cover"
        />
      </Background>
      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
          alt="logo-title"
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="images/play-icon-black.png" alt="play-button" />
          <span>PLAY</span>
        </PlayButton>

        <TrailerButton>
          <img src="images/play-icon-white.png" alt="trailer-button" />
          <span>Trailer</span>
        </TrailerButton>

        <AddButton>
          <span>+</span>
        </AddButton>

        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="group-icon" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 • 7m • Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood
        when one of her dumplings springs to life. But she finds that nothing stays cute and small
        forever.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  width: 35vw;
  min-width: 200px;
  height: 30vw;
  min-height: 170px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 24px;
  margin-right: 22px;
  height: 45px;
  border: none;
  border-radius: 4px;
  background-color: rgb(249, 249, 249);
  font-size: 15px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 45px;
  margin-right: 16px;

  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 26px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background-color: #000;
`;

const SubTitle = styled.div`
  margin-top: 26px;
  min-height: 20px;
  font-size: 15px;
  color: rgb(249, 249, 249);
`;

const Description = styled.div`
  padding: 16px 0px;
  line-height: 1.4;
  font-size: 20px;
  color: rgb(249, 249, 249);
`;
