/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Link from 'next/link';

import { NavigationButton } from './NavigationButton';

const NavBar = ({ user }) => {
  const [isNavOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen(!isNavOpen);
  };

  const closeNav = () => {
    if (isNavOpen) setNavIsOpen(false);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="top-bar">
            <div className="left">
              <Link href="/home">
                {/* eslint-disable jsx-a11y/no-static-element-interactions */}
                {/* eslint-disable jsx-a11y/click-events-have-key-events */}
                <a className="link-large" onClick={closeNav}>
                  <span className="link-text">Bank It!</span>
                </a>
              </Link>
            </div>
            <button
              className={`toggle-button ${isNavOpen ? 'is-open' : ''}`}
              type="button"
              onClick={toggleNav}
            >
              <span className="toggle-bar" />
              <span className="toggle-bar" />
              <span className="toggle-bar" />
            </button>
          </div>
          {!user ? (
            <nav className={isNavOpen ? 'is-open' : null}>
              <div className="middle">
                <Link href="/home">
                  <a className="link" onClick={closeNav}>
                    <span className="link-text">Home</span>
                  </a>
                </Link>
                <Link href="/about">
                  <a className="link" onClick={closeNav}>
                    <span className="link-text">About</span>
                  </a>
                </Link>
                <Link href="/home">
                  <a className="link" onClick={closeNav}>
                    <span className="link-text">Other</span>
                  </a>
                </Link>
              </div>
              <Link href="/login">
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <a className="link" onClick={closeNav}>
                  <span className="link-text">Log in</span>
                </a>
              </Link>
              <a className="link" onClick={closeNav}>
                <NavigationButton href="/get-started" width={177} height={58} borderRadius={5}>
                  <Link href="/">
                    <span className="link-text">Advertise!</span>
                  </Link>
                </NavigationButton>
              </a>
            </nav>
          ) : (
            <nav className={isNavOpen ? 'is-open' : null}>
              <div className="middle">
                <Link href="/dashboard">
                  <a className="link" onClick={closeNav}>
                    <span className="link-text">My Dashboard</span>
                  </a>
                </Link>
              </div>
              <Link href="/logout">
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <a className="link" onClick={closeNav}>
                  <span className="link-text">Log Out</span>
                </a>
              </Link>
              <Link href="/settings">
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <a className="link" onClick={closeNav}>
                  <span className="link-text">Settings</span>
                </a>
              </Link>
            </nav>
          )}
        </div>
      </header>
      <style jsx>
        {`
         header {
           display: flex;
            background-color: white;
            // margin: 0 auto;
            display: flex;
            width: 100%;
            border-width: 0 0 1px;
            border: 1px solid transparent;
            position: fixed;
            top: 0;
            min-height: 100px;
            z-index: 1;
            // position: absolute;
            align-items: center;
          }

        @media (min-width: 768px) {
            header {
              min-height: 60px;
              padding-top: 15px;
              padding-bottom: 15px;
            }
          }

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            overflow: hidden;
          }
          
          @media (min-width:768px) {
            .container {
              min-height: 60px;
              flex-direction: row;
              justify-content: space-between
              align-items: center;
              }
          }

        .toggle-button {
            position: relative;
            margin-right: 15px;
            background-color: transparent;
            height: 40px;
            width: 40px;
            border-radius: 4px;
            border-width: 2px;
        }

        @media (min-width: 768px) {
            .toggle-button {
              display: none;
            }
        }

        nav {
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 0.6s ease-in-out;
            max-height: 0;
            width: 100%;
            overflow: hidden;
        }

        @media (min-width: 768px) {
            nav {
              flex: 1;
              flex-direction: row;
              max-height: 0;
              width: auto;
              padding-bottom: 0;
              overflow: visible;
            }
        }
        
        nav.is-open {
            max-height: 600px;
            height: auto;
            padding-bottom: 5px;
          }

          @media (min-width: 768px) {
            .left {
              // margin-top: -10px;
              padding-left: 39px;
            }
          }

          .middle {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
          }

          @media (min-width: 768px) {
            .middle {
              flex: 1;
              flex-direction: row;
              width: auto;
              justify-content: flex-start;
              margin-left: 70px;
              align-items: center;
            }
          }

          a {
            margin: 10px;
          }

          .link-large {
            font-size: 45px;
            color: #FF5A5F;
            text-decoration: none;
            font-weight: bold;
          }

          @media (max-width: 768px) {
            .link-large {
            font-size: 41px;
          }
          }

          .link {
            display: flex;
            font-size: 20px;
            color: black;
            margin-top: 10px;
            text-decoration: none;
            justify-content: center;
            align-items: center;
            margin-right: 25px;
            margin-left: 25px;
          }

          @media (max-width: 768px) {
            .top-bar {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              height: 80px;
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

export default NavBar;
