import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const playSymbol =
  "https://cdn.glitch.global/4e5e2c47-4904-4821-a1c3-7cd7eb82e11f/play.svg?v=1650716973585";
const pauseSymbol =
  "https://cdn.glitch.global/4e5e2c47-4904-4821-a1c3-7cd7eb82e11f/pause.svg?v=1650717714400";

const Container = styled.div`
  position: relative;

  @media screen and (min-width: 1050px) {
    height: 12vw;
    width: 12vw;
    min-width: 100px;
    min-height: 100px;
  }

  height: 25vw;
  width: 25vw;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const ImageHolder = styled.div`
  @media screen and (min-width: 1050px) {
    height: 25vw;
    width: 25vw;
  }
  height: 40vw;
  width: 40vw;
  margin: -15vw -15vw;
  background: url(${(props) => props.bgImgUrl});
  background-size: cover;
  display: flex;
  overflow: hidden;
  transform: rotate(-45deg);
`;

const PlayPause = styled.img`
  @media screen and (min-width: 1050px) {
    height: 4vw;
    width: 4vw;
  }
  position: absolute;
  height: 6vw;
  width: 6vw;
  z-index: 100;
  transform: rotate(-45deg);
`;

const Track = ({ bgImgUrl, musicUrl, isPlaying, playPressed, pausePressed }) => {
  return (
    <>
      {isPlaying === 'loading' ? <div>LOADING</div> : <></>}
      <Container bgImgUrl={bgImgUrl}>
        <ImageHolder bgImgUrl={bgImgUrl} />
        {isPlaying !== 'paused' ? (
          <PlayPause src={pauseSymbol} onClick={pausePressed} />
        ) : (
          <PlayPause src={playSymbol} onClick={playPressed} />
        )}

      </Container>
    </>
  );
};

export { Track };
