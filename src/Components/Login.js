import styled from "styled-components";
import React from "react";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CtaLogoOne src="/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CtaLogoTwo src="/images/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10vw;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0%;
  right: 0%;
  left: 0%;
  z-index: -1;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 2vw;
  margin-right: auto;
  margin-left: auto;
  max-width: 650px;
  text-align: center;
  transition-timing-function: ease;
  transition: opacity 0.2s;
  width: 100%;
`;

const CtaLogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  color: #f9f9f9;
  letter-spacing: 1.5px;
  background-color: #0063ef;
  width: 100%;
  margin-bottom: 12px;
  font-size: 18px;
  padding: 16.5px 0px;
  border: solid 1px transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 17px;
  line-height: 1.5;
  margin: 0px 0px 24px;
  letter-spacing: 1.5px;
  color: #f9f9f9;
`;

const CtaLogoTwo = styled.img`
  width: 100%;
  margin: 0px 0px 25px;
  max-width: 600px;
  display: inline-block;
  vertical-align: bottom;
`;

export default Login;
