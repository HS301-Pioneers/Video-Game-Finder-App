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
      gameData: [],
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
    this.setState({
      gameData: response.data,
    })
  }
  createGame = async (newGame, event) => {
    console.log(newGame);
    const config = {
      method: "post",
      baseURL: process.env.REACT_APP_SERVER,
      url: "/wishlist/",
      data: newGame
    };
    console.log(config);
    const gameResults = await axios(config);
    console.log(gameResults.data);
    const updatedGames = [...this.state.gameData, gameResults.data];
    this.setState({ games: updatedGames })
  }
  render() {
    return (
      <>

        <form id='theform' className='form' onSubmit={(event) => this.onSubmit(event)}>

          Your Search: {" "}
          <input id='search' type="text" name="yourgame" onChange={this.onChange} />
          <button id='button' type='submit'>Search</button>
        </form>

        {/* <FavoriteGames /> */}
        {this.state.gameData.length &&
          <Container id="App">
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
                    {game.gameStores !== null && 
                    <p key={Math.random() * 100}>Game Stores: {game.gameStores.map(store => store.store.name).join(", ")}</p>}
                    <p key={Math.random() * 100}>Game Tags: {game.gameTags.map(tag => tag.name).join(", ")}</p>
                    <p key={Math.random() * 100}>Game Genres: {game.genres.map(genre => genre.name).join(", ")}</p>
                    <p key={Math.random() * 100}>Game Platforms: {game.platforms.map(platform => platform.platform.name).join(", ")}</p>
                    {game.rating &&
                      <p>Rating: {game.rating.name}</p>}
                  {/* <Button onClick={(game) => this.createGame(game)}>Add to Wishlist</Button> */}
                  <Button onClick={(event) => this.createGame(game, event)}>Add to Wishlist</Button>
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