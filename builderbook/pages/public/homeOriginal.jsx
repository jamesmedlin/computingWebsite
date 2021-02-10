import Head from 'next/head';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import withAuth from '../../lib/withAuth';
import { styleLoginButton } from '../../components/SharedStyles';

const propTypes = {
  router: PropTypes.shape({
    query: PropTypes.shape({
      redirectUrl: PropTypes.string,
    }),
  }).isRequired,
};

function Home() {
  return (
    <div style={{ textAlign: 'center', margin: '0 20px' }}>
      <Head>
        <title>Home page to Builder Book</title>
        <meta name="description" content="Login page for builderbook.org" />
      </Head>
      <br />
      <p style={{ margin: '45px auto', fontSize: '44px', fontWeight: '400' }}>Home Page</p>
      <p>Welcome to this website!</p>
      <br />
      <Button variant="contained" style={styleLoginButton} href="/login">
        Visit Login
      </Button>
    </div>
  );
}

Home.propTypes = propTypes;

export default withAuth(withRouter(Home), { logoutRequired: true });
