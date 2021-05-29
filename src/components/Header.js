import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import icon1 from '../images/home-icon.svg';
import icon2 from "../images/search-icon.svg";
import icon3 from "../images/watchlist-icon.svg";
import icon4 from "../images/original-icon.svg";
import icon5 from "../images/movie-icon.svg";
import icon6 from "../images/series-icon.svg";
import icon7 from "../images/vishnu.png";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut
} from '../features/user/userSlice';

import {useDispatch,useSelector} from 'react-redux';
import { auth,provider } from '../firebase';
import {useHistory} from 'react-router-dom';
function Header(){
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const [propic,changepic]=useState();
  useEffect(()=>{
    auth.onAuthStateChanged(async (user)=>{
      if(user){
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        changepic(user.photoURL);
        history.push('/login');
      }
    })
  },[])
  const history = useHistory();
  const signIn=()=>{
    auth.signInWithPopup(provider)
    .then((result)=>{
      var user = result.user
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }))
      changepic(user.photoURL);
      history.push('/login');
    })
  }
  const signOut = ()=>{
    auth.signOut()
    .then(()=>{
      dispatch(setSignOut());
      history.push("/");
    })
  }

  return (<Nav>
          <Logo src={logo}/>
            {!userName ?(
              <Logincontainer>
              <Login onClick={signIn}>Login</Login>
              </Logincontainer>
             ):
              <>
              <NavMenu>
                <a>
                  <img src={icon1}/>
                  <a style={{textDecoration:'none',color:'white'}} href="/login"><span>HOME</span></a>
                </a>
                <a>
                  <img src={icon2}/>
                  <span>SEARCH</span>
                </a>
                <a>
                  <img src={icon3}/>
                  <span>WATCHLIST</span>
                </a>
                <a>
                  <img src={icon4}/>
                  <span>ORIGINALS</span>
                </a>
                <a>
                  <img src={icon5}/>
                  <span>MOVIES</span>
                </a>
                <a>
                  <img src={icon6}/>
                  <span>SERIES</span>
                </a>
              </NavMenu>
              <DropBtn>
              {propic && <UserImg onClick={signOut} src={propic}/>}
              <Dropdown>
                <a href="#">My Profile</a>
                <a href="#">Log Out</a>
              </Dropdown>
              </DropBtn>
              </>
            }

        </Nav>
      );
}

export default Header;

const Login = styled.div`
  border-radius: 5px;
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  cursor: pointer;
  background-color: rgba(0,0,0,0.6);
  transition: all 0.2s ease 0s;
  text-transform: uppercase;
  &:hover{

    background-color:#f9f9f9;
    color:#000;
    border-color:transparent;
  }
`

const Logincontainer=styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
`
const Nav = styled.nav`
    height: 70px;
    background:#090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x:hidden;
`
const Logo = styled.img`
    width: 80px;

`
const NavMenu = styled.div`
      display: flex;
      flex:1;
      margin-left: 25px;
      align-items: center;
      a{
        display : flex;
        align-items: center;
        padding:0 12px;
        cursor: pointer;

        img{
          height: 20px;

        }
        span{
          font-size: 13px;
          letter-spacing: 1.42px;
          position: relative;
          &:after{
            content: "";
            height: 2px;
            background:white;
            position: absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform: scaleX(0);
          }
        }
        &:hover{
          span:after{
            transform: scaleX(1);
            opacity: 1;
          }
        }
      }
`

const UserImg = styled.img`
      height: 48px;
      width:48px;
      border-radius:50%;
      cursor: pointer;
      /* &:hover{
        div{
          display:block;
        }
      } */

`
 const Dropdown = styled.div`
     display: none;
     position: absolute;
     background-color:#f1f1f1;
     min-width:80px;
     box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
     z-index: 1;
     flex-direction:column;
`
const DropBtn=styled.div`
    &:hover{
}
`
