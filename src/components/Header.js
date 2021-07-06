import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  selectUserPhoto,
  selectUserName,
  setUserLogin,
  setSignOut
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        console.log("object");
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
          })
        );
        history.push("/");
      }
    });
  });

  const signIn = () => {
    auth.signInWithPopup(provider).then(result => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <LoginButton onClick={signIn}>Login</LoginButton>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a href="/">
              <img src="/images/home-icon.svg" alt="home-icon"></img>
              <span>HOME</span>
            </a>

            <a href="/">
              <img src="/images/search-icon.svg" alt="home-icon"></img>
              <span>SEARCH</span>
            </a>

            <a href="/">
              <img src="/images/watchlist-icon.svg" alt="home-icon"></img>
              <span>WATCHLIST</span>
            </a>

            <a href="/">
              <img src="/images/original-icon.svg" alt="home-icon"></img>
              <span>ORIGINALS</span>
            </a>

            <a href="/">
              <img src="/images/movie-icon.svg" alt="home-icon"></img>
              <span>MOVIE</span>
            </a>

            <a href="/">
              <img src="/images/series-icon.svg" alt="home-icon"></img>
              <span>SERIES</span>
            </a>
          </NavMenu>

          <UserImg onClick={signOut} src={userPhoto} />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 36px;
  background: #090b13;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      position: relative;
      font-size: 13px;
      letter-spacing: 1.42px;

      &:after {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        content: "";
        height: 2px;
        background-color: #fff;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
