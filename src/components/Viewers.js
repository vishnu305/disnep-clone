import React from 'react';
import styled from 'styled-components';
import hey1 from '../images/viewers-disney.png';
import hey2 from '../images/viewers-marvel.png';
import hey3 from '../images/viewers-national.png';
import hey4 from '../images/viewers-pixar.png';
import hey5 from '../images/viewers-starwars.png';
import movbac from '../videos/1564674844-disney.mp4';
import ReactPlayer from 'react-player';
function Viewers(){
  return (<Container>
            <Wrap>
            <img src={hey1}/>
            <div>
            <video id="background-video" loop autoPlay>
            <source src={movbac} type="video/mp4" />
            </video>
            </div>
            </Wrap>
            <Wrap>
            <img src={hey2}/>
            <div>
            <ReactPlayer url={movbac} loop={true} controls={true} />
            </div>
            </Wrap>
            <Wrap>
            <img src={hey3}/>
            <div>
            <ReactPlayer url={movbac} loop={true} controls={true} />
            </div>
            </Wrap>
            <Wrap>
            <img src={hey4}/>
            <div>
            <ReactPlayer url={movbac} loop={true} controls={true} />
            </div>
            </Wrap>
            <Wrap>
            <img src={hey5}/>
            <div>
            <ReactPlayer url={movbac} loop={true} controls={true} />
            </div>
            </Wrap>
    </Container>
      );

}

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap:25px;
    grid-template-columns: repeat(5,minmax(0, 1fr));


`

const Wrap = styled.div`
    border: 3px solid rgba(249,249,249,0.1);
    border-radius:10px;
    cursor:pointer;
    /* box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px; */
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    img{
      width:100%;
      height:100%;
      object-fit:cover;
    }
    div{
      display: none;
    }
    &:hover{
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      transform: scale(1.05);
      border-color: rgba(249,249,249,0.8);
    }

`
export default Viewers;
