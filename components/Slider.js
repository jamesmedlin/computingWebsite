/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';

const delay = 2500;

function Slideshow({ items }) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1)),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {items.map((item) => (
            <div className="slide" key={item}>
              <div className="slideContent">{item}</div>
            </div>
          ))}
        </div>

        <div className="slideshowDots">
          {items.map((_, idx) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>
        {`
          .slideshow {
            margin: 0 auto;
            overflow: hidden;
            width: 80%;
          }

          .slideshowSlider {
            white-space: nowrap;
            transition: ease 1000ms;
          }

          .slide {
            display: inline-block;
            height: 250px;
            width: 100%;
            border-radius: 40px;
          }

          .slideContent {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }

          /* Buttons */

          .slideshowDots {
            display: flex;
            justify-content: center;
          }

          .slideshowDot {
            display: inline-block;
            height: 12px;
            width: 12px;
            border-radius: 50%;

            cursor: pointer;
            margin: 15px 7px 0px;

            background-color: grey;
          }

          .slideshowDot.active {
            background-color: lightblue;
          }
        `}
      </style>
    </>
  );
}

export default Slideshow;
