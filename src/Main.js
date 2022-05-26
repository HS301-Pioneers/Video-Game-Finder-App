import axios from "axios";
import React from "react";
import FavoriteGames from "./FavoriteGames";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      game: ' ',
      gameData: []
    }
  }




  onChange = (input) => {
    let getGames = input.target.value;
    this.setState({ game: getGames });
    console.log(getGames);
  };

  onSubmit = async (event) => {
    event.preventDefault();
    console.log(' made it inside onSubmit ');
    const url = `${process.env.REACT_APP_SERVER}/games?gameName=${this.state.game}`;
    console.log(url);
const response = await axios.get(url)
console.log(response.data);
this.setState({ gameData : response.data})
  }

  render() {
    return (
      <>

        <form className='form' onSubmit={(event) => this.onSubmit(event)}>

          Your Search: {" "}
          <input type="text" name="yourgame" onChange={this.onChange} />
          <button type='submit'>Search</button>
        </form>

        <FavoriteGames />
{this.state.gameData.length && 
        <Container >
          <Carousel id="carousel">
            {this.state.gameData.map((game, idx) => (
              <Carousel.Item key={idx}>
                <img id="carousel-image"
src={game.backgroundImg}
                  alt={game.gameName}
                />

                <Carousel.Caption id='carousel-text-box'>
                  <h3>{game.gameName}</h3>
                  <p>game stars:{game.gameStars}</p>
                  <p>Release Date: {game.release_date}</p>
                  {game.gameStores.map((store, idx) => <p key={idx}>Game Stores: {store.store.name}</p>)}
                 {game.gameTags.map((tag, idx) =>  <p key={idx}>Game Tags: {tag.name}</p>)}
                  {game.genres.map((genre, idx) =>  <p key={idx}>Genres: {genre.name}</p>)}
                  {game.platforms.map((platform, idx) =>  <p key={idx}>Platforms: {platform.platform.name}</p> )}
                  {/* {game.rating.map((rating, idx) =>  <p key={idx}>Rating{rating.name}</p> )} */}
                 {game.rating &&
                 <p>Rating: {game.rating.name}</p>}
                  <Button onClick={() => this.deleteGame(game)}>Delete</Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      }
      </>

    )


  }

}



export default Main;