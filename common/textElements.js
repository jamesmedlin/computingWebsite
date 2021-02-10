/* eslint-disable react/prop-types */
import React from 'react';

export const BigTitle = ({
  children,
  fontSize,
  fontFamily,
  fontWeight,
  mobileFontSize,
  textAlign,
  color,
  hasTextShadow,
  maxWidth,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  customStyles,
}) => (
  <>
    <h1 style={customStyles}>{children}</h1>
    <style jsx>
      {`
        h1 {
          font-family: ${fontFamily};
          font-size: ${fontSize}px;
          ${fontWeight ? `font-weight: ${fontWeight};` : ''};
          text-align: ${textAlign};
          color: ${color};
          text-shadow: ${hasTextShadow ? '0 4px 4px rgba(0, 0, 0, 0.2)' : 'none'};
          max-width: ${maxWidth !== undefined ? `${maxWidth}px` : 'none'};
          ${marginTop !== undefined ? `margin-top: ${marginTop}px` : ''};
          ${marginBottom !== undefined ? `margin-bottom: ${marginBottom}px` : ''};
          ${marginLeft !== undefined ? `margin-left: ${marginLeft}px` : ''};
          ${marginRight !== undefined ? `margin-right: ${marginRight}px` : ''};
        }
        @media (max-width: 768px) {
          h1 {
            font-size: ${mobileFontSize}px;
          }
        }

        @font-face {
          font-family: 'Circular';
          src: url('https://www.bu.edu/cdn/fonts/Circular/Circular-Book.woff') format('woff');
        }
      `}
    </style>
  </>
);

BigTitle.defaultProps = {
  fontSize: 40,
  fontFamily: 'Circular',
  mobileFontSize: 20,
  color: 'black',
  textAlign: 'left',
  marginTop: 0,
  marginBottom: 0,
};

export const LittleTitle = ({
  children,
  fontSize,
  fontFamily,
  fontWeight,
  mobileFontSize,
  textAlign,
  color,
  hasTextShadow,
  maxWidth,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  customStyles,
}) => (
  <>
    <h1 style={customStyles}>{children}</h1>
    <style jsx>
      {`
        h1 {
          font-family: ${fontFamily};
          height: auto;
          font-size: ${fontSize}px;
          ${fontWeight ? `font-weight: ${fontWeight};` : ''};
          text-align: ${textAlign};
          color: ${color};
          text-shadow: ${hasTextShadow ? '0 4px 4px rgba(0, 0, 0, 0.2)' : 'none'};
          max-width: ${maxWidth !== undefined ? `${maxWidth}px` : 'none'};
          ${marginTop !== undefined ? `margin-top: ${marginTop}px` : ''};
          ${marginBottom !== undefined ? `margin-bottom: ${marginBottom}px` : ''};
          ${marginLeft !== undefined ? `margin-left: ${marginLeft}px` : ''};
          ${marginRight !== undefined ? `margin-right: ${marginRight}px` : ''};
        }
        @media (max-width: 768px) {
          h1 {
            font-size: ${mobileFontSize}px;
          }
        }
        @font-face {
          font-family: 'Circular';
          src: url('https://www.bu.edu/cdn/fonts/Circular/Circular-Book.woff') format('woff');
        }
      `}
    </style>
  </>
);

LittleTitle.defaultProps = {
  fontSize: 25,
  fontFamily: 'Circular',
  mobileFontSize: 13,
  color: 'black',
  textAlign: 'left',
  marginTop: 0,
  marginBottom: 0,
};

export const H1 = ({
  children,
  fontSize,
  fontFamily,
  mobileFontSize,
  textAlign,
  color,
  hasTextShadow,
  maxWidth,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  customStyles,
}) => (
  <>
    <h1 style={customStyles}>{children}</h1>
    <style jsx>
      {`
        h1 {
          font-family: ${fontFamily};
          font-size: ${fontSize}px;
          text-align: ${textAlign};
          color: ${color};
          text-shadow: ${hasTextShadow ? '0 4px 4px rgba(0, 0, 0, 0.2)' : 'none'};
          max-width: ${maxWidth !== undefined ? `${maxWidth}px` : 'none'};
          ${marginTop !== undefined ? `margin-top: ${marginTop}px` : ''};
          ${marginBottom !== undefined ? `margin-bottom: ${marginBottom}px` : ''};
          ${marginLeft !== undefined ? `margin-left: ${marginLeft}px` : ''};
          ${marginRight !== undefined ? `margin-right: ${marginRight}px` : ''};
        }
        @media (max-width: 768px) {
          h1 {
            font-size: ${mobileFontSize}px;
          }
        }
        @font-face {
          font-family: 'Circular';
          src: url('https://www.bu.edu/cdn/fonts/Circular/Circular-Book.woff') format('woff');
        }
      `}
    </style>
  </>
);

H1.defaultProps = {
  fontSize: 15,
  fontFamily: 'Circular',
  mobileFontSize: 13,
  color: 'black',
  textAlign: 'center',
  marginTop: 0,
  marginBottom: 0,
};

export const BodyText = ({
  children,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  color,
  hasTextShadow,
  maxWidth,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  customStyles,
}) => (
  <>
    <p style={customStyles}>{children}</p>
    <style jsx>
      {`
        p {
          font-family: ${fontFamily};
          font-size: ${fontSize}px;
          ${fontWeight ? `font-weight: ${fontWeight};` : ''};
          text-align: ${textAlign};
          color: ${color};
          text-shadow: ${hasTextShadow ? '0 4px 4px rgba(0, 0, 0, 0.2)' : 'none'};
          max-width: ${maxWidth !== undefined ? `${maxWidth}px` : 'none'};
          ${marginTop !== undefined ? `margin-top: ${marginTop}px` : ''};
          ${marginBottom !== undefined ? `margin-bottom: ${marginBottom}px` : ''};
          ${marginLeft !== undefined ? `margin-left: ${marginLeft}px` : ''};
          ${marginRight !== undefined ? `margin-right: ${marginRight}px` : ''};
        }
        @font-face {
          font-family: 'Circular';
          src: url('https://www.bu.edu/cdn/fonts/Circular/Circular-Book.woff') format('woff');
        }
      `}
    </style>
  </>
);

BodyText.defaultProps = {
  fontSize: 22,
  fontFamily: 'Circular',
  color: 'black',
  textAlign: 'left',
  marginTop: 0,
  marginBottom: 0,
};
