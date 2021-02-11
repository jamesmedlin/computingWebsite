import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import withAuth from '../../lib/withAuth';
import { Container } from '../../components/Container';
import { NavigationButton } from '../../components/NavigationButton';
import { BigTitle, H1, LittleTitle, BodyText } from '../../common/textElements';
import Slideshow from '../../components/Slider';
import { Footer } from '../../components/Footer';

const Home = () => (
  <div className="container">
    {/* <Head>
      <title>MeetMe</title>
    </Head> */}
    {/* <main> */}
    <div className="topRow">
      <Container>
        <div className="column">
          <BigTitle
            marginTop={0}
            marginBottom={0}
            fontSize={50}
            mobileFontSize={25}
            color="#3d4849"
          >
            Only 7% of users pay attention to internet ads.
          </BigTitle>
          <BigTitle marginTop={30} fontSize={60} mobileFontSize={30} color="#3d4849">
            Crank that to 100%
          </BigTitle>
        </div>
      </Container>
    </div>
    <div className="uploadContainer">
      <Container>
        <div className="Row">
          <div className="columnCentered">
            <div className="uploadTextContainer">
              <BigTitle textAlign="center">Skip buying screentime. Buy attention.</BigTitle>
            </div>
            <div className="stepsRow">
              <div className="step">
                {/* <LittleTitle>
                  Today’s advertising is like skywriting. Businesses like yours spend in the blind
                  hope that potential customers look up, much less retain your message.
                </LittleTitle>
                <LittleTitle>We take a surgical approach.</LittleTitle> */}
                <LittleTitle>Only pay for confirmed views.</LittleTitle>
                <LittleTitle>Viewers must pass a quiz to prove they paid attention.</LittleTitle>
              </div>
              <div className="step">
                <LittleTitle>This is a picture (insert here)</LittleTitle>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div className="uploadContainerRev">
      <Container>
        <div className="Row">
          <div className="columnCentered">
            <div className="uploadTextContainer">
              <BigTitle textAlign="center">Make it easier for your customers to spend.</BigTitle>
            </div>
            <div className="stepsRowRev">
              <div className="step">
                <LittleTitle>This is a picture (insert here)</LittleTitle>
              </div>
              <div className="step">
                <LittleTitle fontSize={20} marginBottom={7}>
                  Add shortcuts for your viewers:
                </LittleTitle>
                <LittleTitle>DoorDash/UberEats</LittleTitle>
                <LittleTitle>Amazon</LittleTitle>
                <LittleTitle>Live Yelp score</LittleTitle>
                <LittleTitle>
                  Navigation (live directions and distance from your business.)
                </LittleTitle>
                <LittleTitle>Reminder (reminds a viewer later)</LittleTitle>
                <LittleTitle>etc.</LittleTitle>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div className="uploadContainer">
      <Container>
        <div className="Row">
          <div className="columnCentered">
            <div className="uploadTextContainer">
              <BigTitle textAlign="center">Truly target your customers.</BigTitle>
            </div>
            <div className="stepsRow">
              <div className="step">
                <LittleTitle marginBottom={7}>
                  Users verify their own information. No more relying on estimated guesses of who a
                  user is by third-parties.
                </LittleTitle>
                <LittleTitle>
                  Set a location and radius of where you want your ad viewed.
                </LittleTitle>
              </div>
              <div className="step">
                <LittleTitle>This is a picture (insert here)</LittleTitle>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div className="uploadContainer">
      <Container>
        <div className="Row">
          <div className="columnCentered">
            <div className="uploadTextContainer">
              <BigTitle>Our Partners</BigTitle>
            </div>
            <Slideshow items={['First Partner', 'Second Partner', 'Third Partner']} />
          </div>
        </div>
      </Container>
    </div>
    <Footer />]{/* </main> */}
    <style jsx>
      {`
        .topRow {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 300px;
          padding-bottom: 150px;
          background-color: white;
        }
        @media (max-width: 768px) {
          .topRow {
            padding-top: 200px;
            padding-bottom: 90px;
            background-color: white;
          }
        }
        .Row {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          min-height: 400px;
        }
        .column,
        .columnCentered {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .columnCentered {
          align-items: center;
          width: 100%;
        }
        @media (max-width: 768px) {
          .column,
          .columnCentered {
            min-width: unset;
          }
        }
        .subText {
          display: flex;
          justify-content: flex-end;
          margin-top: 75px;
        }
        @media (max-width: 768px) {
          .subText {
            margin-top: 40px;
          }
        }
        .uploadContainer {
          padding-right: 10px;
          padding-left: 10px;
          padding-top: 60px;
          padding-bottom: 50px;
          background-color: #f6f7f9;
        }
        .uploadContainerRev {
          padding-top: 60px;
          padding-right: 10px;
          padding-left: 10px;
          padding-bottom: 50px;
          background-color: lightblue;
        }
        .uploadTextContainer {
          margin-bottom: 90px;
        }
        @media (max-width: 768px) {
          .uploadTextContainer {
            margin-bottom: 40px;
          }
        }
        .stepsRow {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          width: 100%;
        }
        .stepsRowRev {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap-reverse;
          width: 100%;
        }
        .step {
          width: 400px;
        }
        @media (max-width: 768px) {
          .step {
            width: unset;
            padding: 10px;
            margin-right: unset;
            margin-left: unset;
          }
        }
        .rectangle1,
        .rectangle2,
        .rectangle3 {
          width: 131px;
          height: 131px;
          background-color: lightBlue;
        }
        .rectangle1 {
          transform: rotate(-21deg);
        }
        .rectangle2 {
          transform: rotate(-80deg);
        }
        .rectangle3 {
          transform: rotate(-100deg);
        }
        .fakeLogos {
          width: 100px;
          height: 100px;
          background-color: red;
        }
        .slider {
          display: flex;
          overflow: hidden;
          justify-content: flex-start;
          align-items: unset;
          max-width: 800px;
        }
        @media (max-width: 768px) {
          .slider {
            width: 80%;
          }
        }
        .slide {
          margin-right: 20%;
        }
      `}
    </style>
    <style jsx global>
      {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}
    </style>
  </div>
);

export default withAuth(withRouter(Home), { logoutRequired: true });
