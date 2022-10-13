import * as React from "react";
import styled from "styled-components";

import { TrackPlayer } from "../components/TrackPlayer.jsx";

const Container = styled.div`
  @media screen and (min-width: 1050px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100;
  }

  flex-direction: column;
  height: initial;
  width: initial;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 50px;
`;

const Description = styled.div`
  @media screen and (min-width: 1050px) {
    margin-left: -14vw;
    max-height: 70vh;
    margin: 0 0 65px 0;
  }

  font-family: "Montserrat", sans-serif;
  width: initial;
  margin: 50px 0;
  line-height: 1.5;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  @media screen and (min-width: 1050px) {
    width: 30vw;
    margin-left: -14vw;
    max-height: 70vh;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadText = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: larger;
  line-height: 1.5;
  font-weight: 200;

  @media screen and (min-width: 1050px) {
    margin-bottom: 20px;
  }
`;

const TipText = styled.p`
  font-family: "Montserrat", sans-serif;
  margin-top: 15vh;
  font-size: 0.85em;
  color: blue;
  text-align: center;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`;

const Home = () => {
  return (
    <>
    <LogoContainer>
      <img src="https://cdn.glitch.global/5246aeba-3676-491e-b78f-b02a088aed05/CS-Logo-02.png?v=1650974785263" />
      </LogoContainer>
      <Container>
        <LeftContainer>
          <TrackPlayer />
          <TipText>
            Tip: refresh the page to generate a new selection of sounds
          </TipText>
        </LeftContainer>
        <RightContainer>
          <HeadText>
            A collection of sonic snapshots of Limerick City, captured by local
            multimedia artists on a single day. <i>Cross Section</i> allows listeners
            from all over the world to tune in to the unique sounds of Limerick.
          </HeadText>
          <Description>
            Limerick is a culturally vibrant and diverse city which, like the
            River Shannon on which it's built, flows with a powerful current of
            sound and energy. It's a city rich with the sounds of bustling
            markets, medieval churches and packed playgrounds. Clinking glasses
            and lively chats spill from pub doorways. The whizzing of wheels and
            smack of wood echoes from the skatepark. Buskers sing, strum and bang
            as coins "ping" inside their guitar cases. Boots and heels clop
            along the high-street; while match-day pilgrims march in their
            thousands towards the gates of Thomond Park. <br /> <br /> Limerick is
            a city in continuous performance of its own dynamic symphony. Click on
            the map icons and experience it for yourself.
          </Description>
        </RightContainer>
      </Container>
    </>
  );
};

export { Home };
