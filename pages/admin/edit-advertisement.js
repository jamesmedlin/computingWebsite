/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import NProgress from 'nprogress';
import Link from 'next/link';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import notify from '../../lib/notify';

import {
  editAdvertisementApiMethod,
  getAdvertisementApiMethod,
  removeAdvertisementApiMethod,
} from '../../lib/api/admin';

function EditAdvertisementPage({ ad }) {
  const [name, setName] = useState(ad.name);
  const [uri, setUri] = useState(ad.uri);
  const [website, setWebsite] = useState(ad.website);
  const [question, setQuestion] = useState(ad.question);
  const [quiz1, setQuiz1] = useState(ad.quiz[0]);
  const [quiz2, setQuiz2] = useState(ad.quiz[1]);
  const [quiz3, setQuiz3] = useState(ad.quiz[2]);
  const [quiz4, setQuiz4] = useState(ad.quiz[3]);
  const [correctAnswer, setCorrectAnswer] = useState(ad.correctAnswer);
  const [longitude, setLongitude] = useState(ad.longitude);
  const [latitude, setLatitude] = useState(ad.latitude);
  const [radius, setRadius] = useState(ad.radius);

  async function updateAd() {
    NProgress.start();
    if (name && uri) {
      const quiz = [quiz1, quiz2, quiz3, quiz4];
      try {
        await editAdvertisementApiMethod({
          _id: ad._id,
          name,
          website,
          question,
          quiz,
          correctAnswer,
          uri,
          longitude,
          latitude,
          radius,
        });
        notify('Saved');
        NProgress.done();
        Router.push('/dashboard');
      } catch (err) {
        notify(err);
        NProgress.done();
      }
    } else {
      notify('You must have a valid name and uri.');
    }
  }
  async function removeAd() {
    NProgress.start();
    try {
      await removeAdvertisementApiMethod({
        _id: ad._id,
      });
      notify('Removed');
      NProgress.done();
      Router.push('/dashboard');
    } catch (err) {
      notify(err);
      NProgress.done();
    }
  }

  return (
    <>
      <Button variant="contained" onClick={() => removeAd()} style={{ marginTop: '150px' }}>
        Delete
      </Button>
      <label style={{ width: '50%' }}>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          style={{ width: '100%' }}
        />
      </label>
      <label style={{ width: '100%' }}>
        Uri:{' '}
        <input
          type="text"
          value={uri}
          onChange={(event) => {
            setUri(event.target.value);
          }}
          style={{ width: '100%' }}
        />
      </label>
      <label style={{ width: '100%' }}>
        Website:{' '}
        <input
          type="text"
          value={website}
          onChange={(event) => {
            setWebsite(event.target.value);
          }}
          style={{ width: '100%' }}
        />
      </label>
      <label style={{ width: '100%' }}>
        Question:{' '}
        <input
          type="text"
          value={question}
          onChange={(event) => {
            setQuestion(event.target.value);
          }}
          style={{ width: '100%' }}
        />
      </label>
      <label style={{ width: '100%' }}>
        Choice:{' '}
        <input
          type="text"
          value={quiz1}
          onChange={(event) => {
            // this is incorrect
            setQuiz1(event.target.value);
          }}
          style={{ width: '100%' }}
        />
      </label>
      <label style={{ width: '100%' }}>
        Choice:{' '}
        <input
          type="text"
          value={quiz2}
          onChange={(event) => {
            // this is incorrect
            setQuiz2(event.target.value);
          }}
          style={{ width: '100%' }}
        />
      </label>
      <label style={{ width: '100%' }}>
        Choice:{' '}
        <input
          type="text"
          value={quiz3}
          onChange={(event) => {
            // this is incorrect
            setQuiz3(event.target.value);
          }}
          style={{ width: '100%' }}
        />
      </label>
      <label style={{ width: '100%' }}>
        Choice:{' '}
        <input
          type="text"
          value={quiz4}
          onChange={(event) => {
            // this is incorrect
            setQuiz4(event.target.value);
          }}
          style={{ width: '100%' }}
        />
      </label>
      <label style={{ width: '100%' }}>
        Correct Answer:{' '}
        <input
          type="text"
          value={correctAnswer}
          onChange={(event) => {
            setCorrectAnswer(event.target.value);
          }}
          style={{ width: '100%' }}
        />
      </label>
      <label style={{ width: '50%' }}>
        Longitude:{' '}
        <input
          type="text"
          value={longitude}
          onChange={(event) => {
            setLongitude(event.target.value);
          }}
          style={{ width: '100%' }}
        />
      </label>
      <label style={{ width: '50%' }}>
        Latitude:{' '}
        <input
          type="text"
          value={latitude}
          onChange={(event) => {
            setLatitude(event.target.value);
          }}
          style={{ width: '100%' }}
        />
      </label>
      <label style={{ width: '25%' }}>
        Radius:{' '}
        <input
          type="text"
          value={radius}
          onChange={(event) => {
            setRadius(event.target.value);
          }}
          style={{ width: '100%' }}
        />
      </label>
      <Button variant="contained" onClick={() => updateAd()}>
        Save
      </Button>
      <Link href="/dashboard">
        <Button variant="contained">Cancel</Button>
      </Link>
      <style jsx>
        {`
          .topRow {
            flex: 1;
            display: flex;
            width: 50%;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
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

EditAdvertisementPage.getInitialProps = async ({ query }) => {
  const ad = await getAdvertisementApiMethod({ slug: query.slug });
  return { ad };
};

export default EditAdvertisementPage;
