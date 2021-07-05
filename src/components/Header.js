import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
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

      <UserImg src="https://avatars.githubusercontent.com/u/57122180?v=4" />
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
