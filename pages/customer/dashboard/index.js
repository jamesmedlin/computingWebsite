/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import withAuth from '../../../lib/withAuth';

import { getMyAdvertisementsApiMethod } from '../../../lib/api/customer';
import { BigTitle, LittleTitle } from '../../../common/textElements';
import CreateAdvertisement from './create-advertisement';

function Dashboard({ advertisements }) {
  const [createAd, setCreateAd] = useState(false);

  return (
    <>
      <div className="topRow">
        {createAd && <CreateAdvertisement />}
        {!createAd && (
          <div>
            {advertisements.length !== 0 ? (
              advertisements.map((ad) => (
                <div key={ad.name}>
                  <div>Name: {ad.name}</div>
                  <div>Views: {ad.viewers}</div>
                  <div>Uri: {ad.uri}</div>
                  <div>Website: {ad.website}</div>
                  <div>
                    Geographic Spread: {ad.longitude}, {ad.latitude}: {ad.radius} miles.
                  </div>
                  <div>Age Range: ___</div>
                  <div>Gender: ___</div>
                  <div>Shortcut Buttons: ___, ___, ____.</div>
                  <Link
                    href={`/admin/edit-advertisement?slug=${ad.slug}`}
                    as={`/dashboard/edit-advertisement/${ad.slug}`}
                  >
                    <Button variant="contained">Edit</Button>
                  </Link>
                </div>
              ))
            ) : (
              <div>
                <div>You currently have no Advertisements</div>
              </div>
            )}
            <div key="create">
              <Link
                href="/customer/dashboard/create-advertisement"
                as="/dashboard/create-advertisement"
              >
                <Button variant="contained">Create</Button>
              </Link>
            </div>
          </div>
        )}
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
            background-color: white;
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
}

Dashboard.getInitialProps = async ({ req, res }) => {
  if (req && !req.user) {
    res.redirect('/login');
    return { advertisements: [] };
  }

  const headers = {};
  if (req && req.headers && req.headers.cookie) {
    headers.cookie = req.headers.cookie;
  }

  const { advertisements } = await getMyAdvertisementsApiMethod({ headers });
  return { advertisements };
};

export default withAuth(Dashboard);
