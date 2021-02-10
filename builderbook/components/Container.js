/* eslint-disable react/prop-types */
import React from 'react';

export const Container = ({
  children,
  directChildren,
  marginTop,
  marginBottom,
  paddingTop,
  paddingBottom,
  paddingRight,
  isFluid,
  backgroundColor,
  backgroundImage,
  background,
  liftZIndex,
  maxWidth,
}) => (
  <>
    <div className="container">
      <div className={isFluid ? 'child-fluid' : 'child'}>{children}</div>
      {directChildren}
    </div>

    <style jsx>
      {`
        .container {
          background-color: ${backgroundColor};
          ${backgroundImage ? `background-image: ${backgroundImage};` : ''}
          ${backgroundImage ? 'background-size: cover;' : ''}
        ${backgroundImage ? 'background-position-x: 50%;' : ''}
        ${background ? `background: ${background};` : ''}
        position: relative;
          ${liftZIndex ? `z-index: 1;` : ''}
          margin: auto;
        }
        @media (max-width: 767px) {
          .container {
            background-image: none;
          }
        }
        .child {
          padding-right: ${paddingRight}px;
          padding-left: 15px;
          padding-top: ${paddingTop}px;
          padding-bottom: ${paddingBottom}px;
          margin-right: auto;
          margin-left: auto;
          margin-top: ${marginTop}px;
          margin-bottom: ${marginBottom}px;
          ${maxWidth !== undefined ? `max-width: ${maxWidth}px;` : ''}
        }
        @media (min-width: 768px) {
          .child {
            width: 750px;
          }
        }
        @media (min-width: 992px) {
          .child {
            width: 970px;
          }
        }
        @media (min-width: 1200px) {
          .child {
            width: 1170px;
          }
        }
        .child-fluid {
          padding-right: 15px;
          padding-left: 15px;
          padding-top: ${paddingTop}px;
          padding-bottom: ${paddingBottom}px;
          margin-right: auto;
          margin-left: auto;
          margin-top: ${marginTop}px;
          margin-bottom: ${marginBottom}px;
        }
      `}
    </style>
  </>
);

Container.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingRight: 15,
  isFluid: false,
  backgroundColor: 'transparent',
};
