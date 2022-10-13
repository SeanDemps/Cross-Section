import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { Track } from "../components/track.jsx";
import { track_objects } from "../data/track_info.js";

const Container = styled.div`
  margin-top: 15vw;
  width: calc(50vw + 20px);

  @media screen and (min-width: 1050px) {
    margin-top: 0;
    width: calc(24vw + 20px);
    min-width: 200px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  transform: rotate(45deg);
`;

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

const four_tracks = getRandom(track_objects, 4);

const TrackPlayer = () => {
  const audioRefs = useRef(
    four_tracks.map((track) => new Audio(track.musicUrl))
  );

  const [playerStates, setPlayerStates] = useState(
    four_tracks.map((obj, index) => ({
      ...obj,
      playing: "paused",
      audioRef: audioRefs.current[index],
    }))
  );

  const play = (index) => {
    playerStates.forEach((player, index) => {
      playerStates[index].playing = "paused";
      player.audioRef.pause();
      player.audioRef.currentTime = 0;
    });
    setPlayerStates([...playerStates]);

    const audio = playerStates[index].audioRef;

    if (audio.HAVE_ENOUGH_DATA === 4) {
      audio.play();
      playerStates[index].playing = "playing";
      setPlayerStates([...playerStates]);
    } else {
      playerStates[index].playing = "loading";
      setPlayerStates([...playerStates]);
      audio.addEventListener("canplaythrough", (event) => {
        playerStates[index].playing = "playing";
        setPlayerStates([...playerStates]);
        audio.play();
      });
    }
  };

  const pause = (index) => {
    const audio = playerStates[index].audioRef;
    audio.pause();
    audio.currentTime = 0;
    playerStates[index].playing = "paused";
    setPlayerStates([...playerStates]);
  };

  return (
    <Container>
      <Grid>
        {playerStates.map(({ bgImgUrl, musicUrl, id, playing }, index) => (
          <Track
            bgImgUrl={bgImgUrl}
            key={id}
            isPlaying={playing}
            playPressed={() => play(index)}
            pausePressed={() => pause(index)}
          />
        ))}
      </Grid>
    </Container>
  );
};

export { TrackPlayer };
