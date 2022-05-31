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
                    <p key={idx}>Game Stores: {game.gameStores.map(store => store.store.name).join(", ")}</p>
                    <p key={idx}>Game Tags: {game.gameTags.map(tag => tag.name).join(", ")}</p>
                    <p key={idx}>Game Genres: {game.genres.map(genre => genre.name).join(", ")}</p>
                    <p key={idx}>Game Platforms: {game.platforms.map(platform => platform.platform.name).join(", ")}</p>
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