import styled from "styled-components"
import { auth, provider,signInWithPopup } from "../firebase";
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {setUsersLoginDetails} from '../features/users/usersSlice'


const Header=(props)=>{
    const dispatch=useDispatch()
    const history=useNavigate()
    const userName=useSelector(state=>state.user.name)
    const userPhoto=useSelector(state=>state.user.photo)

    console.log(userName);

    const handleAuth=()=>{
    signInWithPopup(auth,provider).then(res=>{
        setUser(res.user)
    }).catch(err=>{
        console.log(err);
    })
    }

    const setUser=(user)=>{
        
        dispatch(
            setUsersLoginDetails(
                {
                    name:user.displayName,
                    photo:user.photoURL,
                    email:user.email

                }
            )
        )
    }
    return(
        <Nav>
            <Logo>
                <img src='/images/logo.svg' alt="DISENY" />
            </Logo>
            {
                !userName?  <Login onClick={handleAuth}>Login</Login>:<><>
                    <NavMenue>
                        <a href="/">
                            <img src="/images/home-icon.svg" alt="Home" />
                            <span>Home</span>
                        </a>
                        <a href="/">
                            <img src="/images/search-icon.svg" alt="Search" />
                            <span>Search</span>
                        </a>
                        <a href="/">
                            <img src="/images/watchlist-icon.svg" alt="warchlist" />
                            <span>warchlist</span>
                        </a>
                        <a href="/">
                            <img src="/images/original-icon.svg" alt="originals" />
                            <span>originals</span>
                        </a>
                        <a href="/">
                            <img src="/images/movie-icon.svg" alt="Home" />
                            <span>movies</span>
                        </a>
                        <a href="/">
                            <img src="/images/series-icon.svg" alt="movies" />
                            <span>series</span>
                        </a>
                    </NavMenue></><UserImg src={userPhoto} alt={userName} /></>
            }
          
          
        </Nav>
    )
}
const Nav=styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const Logo=styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`
const NavMenue=styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        span{
            color: rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0;
            white-space: nowrap;
            position: relative;
              &::before{
                background-color: rgb(249,249,249);
                border-radius: 0 0 4px 4px;
                bottom: -6px;
                left: 0;
                content: "";
                height: 2px;
                opacity: 0;
                position: absolute;
                right: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
                display: block;
            }
        }
       
        
        &:hover{
        span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
}

@media (max-width:768px)  {
    display: none;
} 
`
const Login=styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease-out 0s;

    &:hover{
        background-color: #f9f9f9;
        color:#000;
        border-color: transparent;
    }
`
const UserImg = styled.img`
  height: 100%;
`;

export default Header