import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt="logo-one" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+
          subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by
          $1
        </Description>
        <CTALogoTwo src="images/cta-logo-two.png" alt="logo-two" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;

  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    content: "";
    opacity: 0.7;

    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
  }
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  max-width: 650px;
  padding: 80px 40px;
  margin-top: 100px;
`;

const CTALogoOne = styled.img`
  /* width: 100px;
  height: 100px; */
`;

const SignUp = styled.a`
  width: 100%;
  padding: 17px 0;
  margin: 8px 0 12px;

  border-radius: 4px;
  text-align: center;
  color: #f9f9f9;
  background-color: #0063e5;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
