import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice.js";
const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.replace("/home");
      }
    });
  }, [userName]);
  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.replace("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney" />
      </Logo>
      {!userName ? (
        <LOGIN onClick={handleAuth}>Login</LOGIN>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a href="/watch">
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a href="/original">
              <img src="/images/original-icon.svg" alt="ORIGINAL" />
              <span>ORIGINAL</span>
            </a>
            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  height: 70px;
  display: flex;
  justify-content: space-between;
  background-color: #090b13;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  padding: 0px 36px;
  z-index: 3;
  letter-spacing: 1.5;
`;
const Logo = styled.a`
  width: 80px;
  min-height: 70px;
  margin-top: 15px;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: end;
  position: relative;
  margin-right: auto;
  margin-left: 30px;
  a {
    display: flex;
    padding: 0px 12px;
    align-items: center;
    img {
      width: 25px;
      min-width: 25px;
      height: 25px;
      z-index: auto;
    }
    span {
      position: relative;
      padding: 0px 3px;
      white-space: nowrap;
      &:before {
        border-radius: 0px 0px 4px 4px;
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: -6px;
        content: "";
        height: 2px;
        background-color: rgb(249, 249, 249);
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s;
        transform-origin: left center;
        transform: scalex(0);
        width: auto;
      }
    }
    &:hover {
      span:before {
        visibility: visible;
        transform: scalex(1);
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const LOGIN = styled.a`
  font-size: 20px;
  letter-spacing: 0.1em;
  font-weight: 500;
  text-transform: uppercase;
  padding: 8px 16px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #f9f9f9;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #ffffff;
    color: #000000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  padding: 10px;
  width: 100px;
  font-size: 14px;
  opacity: 0;
  letter-spacing: 3px;
`;

const SignOut = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
