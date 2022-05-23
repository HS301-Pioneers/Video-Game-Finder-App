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
          <Carousel>
            {this.state.gameData.map(game => (
              <Carousel.Item key={game._id}>
                <img
src={game.backgroundImg}
                  alt={game.gameName}
                />

                <Carousel.Caption id='carousel-text-box'>
                  <h3>{game.gameName}</h3>
                  <p>game stars:{game.gameStars}</p>
                  <p>Release Date: {game.release_date}</p>
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