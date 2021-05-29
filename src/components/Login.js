import React from 'react';
import styled from 'styled-components';
import backgroundimage from '../images/login-background.jpg';
import cta from '../images/cta-logo-one.svg';
import cta2 from '../images/cta-logo-two.png';

function Login(){
  return (<Container>
            <img src={backgroundimage}/>
            <Content>
              <CTA>
                <CTALogoOne src={cta}/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                The pack is available at a monthly subscription of Rs 299 per month. Customers can also opt for a yearly subscription that is priced at Rs 1,499. With the Disney+ Hotstar Premium subscription, users will get unlimited live sports streaming along with special Hostar specials and Star series before TV broadcast.
                </Description>
                <CTALogoTwo src={cta2}/>
              </CTA>
            </Content>
          </Container>
      );
}

const Container = styled.div`

    position: relative;
    height:calc(100vh - 70px);

    align-items: center;
    justify-content: center;
    img{
      width:100%;
      height: 100%;
    }

    /* &:before{

      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(backgroundimage);
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left:0;
      right: 0;
      z-index: -1;
    } */


`
const Content = styled.div``
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width:80%;
    z-index:2;
    position:absolute;
    bottom: 20%;
    left:25%;
    display:flex;
    flex-direction: column;
`
const CTALogoOne=styled.img``
const CTALogoTwo=styled.img``
const SignUp=styled.a`
  width:100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color:#f9f9f9;
  border-radius:4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  margin-top:8px;
  margin-bottom:12px;
  &:hover{
    background: #0483ee;
    letter-spacing: 1.5px;
  }
`

const Description=styled.p`
  font-size: 11px;
  letter-spacing:1.5px;
  text-align: center;
  line-height:1.5;
`
export default Login;
