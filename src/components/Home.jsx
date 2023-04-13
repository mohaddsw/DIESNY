import styled from "styled-components"
import ImgSlider from "./ImgSlider"
import Viewers from "./Viewers"
import Recommends from "./Recommends"
import NewDisney from "./NewDisney"
import Originals from "./Originals"
import Tranding from "./Tranding"
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { setMovies } from "../features/movie/movieSlice"
import {selectUserName} from '../features/users/usersSlice'
import db from '../disneyPlusMoviesData.json'

const Home=(props)=>{
  const dispatch=useDispatch()
  const userName=useSelector(selectUserName)
 
  useEffect( ()=>{
    let recommends=[]
    let newDisneys=[]
    let originals=[]
    let trending=[]
    Object.values(db.movies).map(movie=>{
      switch(movie.type){
        case "recommend":
          recommends.push(movie)
          break
        case "new":
          newDisneys.push(movie);
          break;
        case "original":
          originals.push(movie)
          break;
        case "tranding":
          trending.push(movie)
          break;

      }
   })
   dispatch(setMovies({
    recommend:recommends,
    newDisney:newDisneys,
    original:originals,
    tranding:trending
   }))
  },[userName])

    return(
        <Container>
           <ImgSlider/>
           <Viewers/>
           <Recommends/>
           <NewDisney/>
           <Originals/>
           <Tranding/>
        </Container>
    )
}
export default Home
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;