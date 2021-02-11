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
            <LittleTitle marginTop={0} marginBottom={30} fontSize={26} mobileFontSize={16}>
              We are currently working on this page...
            </LittleTitle>
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
          }
          @media (max-width: 768px) {
            .topRow {
              padding-top: 200px;
              padding-bottom: 15px;
            }
          }
        `}
      </style>
    </>
  );
};

export default withAuth(withRouter(About), { logoutRequired: true });
