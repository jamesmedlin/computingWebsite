import { withRouter } from 'next/router';
import { Container } from '../../components/Container';
import { BigTitle, LittleTitle } from '../../common/textElements';

import withAuth from '../../lib/withAuth';

const About = () => {
  return (
    <>
      <div className="topRow">
        <Container>
          <div className="column">
            <LittleTitle
              marginTop={0}
              marginBottom={30}
              fontSize={26}
              mobileFontSize={16}
              color="white"
            >
              With Google, Facebook, etc, you buy the potential to grab people&apos;s attention
              regardless of your outcome.
            </LittleTitle>
            <LittleTitle
              marginTop={0}
              marginBottom={54}
              fontSize={26}
              mobileFontSize={16}
              color="white"
            >
              With Bank It! you buy the guarantee that your target customer has learned about and
              retained your advertised message.
            </LittleTitle>
            <BigTitle color="white">Make it easier for your target customers to spend.</BigTitle>
          </div>
        </Container>
      </div>
      <style jsx>
        {`
          .topRow {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 300px;
            padding-bottom: 15px;
            background-color: blue;
          }
          @media (max-width: 768px) {
            .topRow {
              padding-top: 200px;
              padding-bottom: 15px;
              background-color: blue;
            }
          }
        `}
      </style>
    </>
  );
};

export default withAuth(withRouter(About), { logoutRequired: true });
