import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <>
      <div className="container">
        <div>Get Started</div>
        <div>Learn More</div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding-right: 15%;
            padding-left: 15%;
            justify-content: flex-start;
            overflow: hidden;
            background-color: lightblue;
            min-height: 300px;
          }

          @media (max-width: 768px) {
            .container {
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
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
    </>
  );
};
