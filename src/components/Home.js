import React,{ useEffect } from 'react';
import styled from 'styled-components';
import bac from '../images/home-background.png';

import ImgSlider from './imageslider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';
function Home(){
  const dispatch = useDispatch();
  useEffect(()=>{
    db.collection("movies").onSnapshot((snapshot)=>{
        let tempMovies = snapshot.docs.map((doc)=>{
            return {id: doc.id,...doc.data()}
        })

      dispatch(setMovies(tempMovies));
    })
  },[])
  return (<Container>
            <Background>
              <img src={bac}/>
            </Background>
            <ImgSlider />
            <Viewers />
            <Movies />

        </Container>
      );
}

export default Home;
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`

const Container = styled.main`
    /* height: 70px;
    background:#090b13; */
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    &:before {
      background: url({bac}) center center / cover no-repeat fixed;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }

`
