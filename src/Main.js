import axios from "axios";
import React from "react";
import FavoriteGames from "./FavoriteGames";

class Main extends React.Component{ 
 
  constructor(props) {
    super(props);
    this.state= {
game: ' '
    }
  }




onChange = (input) => {
let getGames = input.target.value;
this.setState({game: getGames});
console.log(getGames);
};

onSubmit = async (event) => {
  event.preventDefault();
  console.log(' made it inside onSubmit ');
const url = `${process.env.REACT_APP_SERVER}/games?gameName=${this.state.game}`;
console.log(url);
//const response = await axios.get(url);
//
//console.log(response.data);

}

    render() {
         return(
           <>
           
            <form className='form' onSubmit={(event ) => this.onSubmit(event)}>

            Your Search: {" "}
            <input type="text" name="yourgame" onChange={this.onChange} />
            <button type='submit'>Search</button>
          </form>

          <FavoriteGames />

         
          </>
        
         )
        
         
        }
        
        <Container >
            <Carousel>
              {this.state.game.map(game=> (
                <Carousel.Item key={book._id}>
                  <img
                   // id='carousel-image'
                   // className="d-block w-100"
                  //  src={gameImg}
                    alt={game.title}
                  />

                  <Carousel.Caption id='carousel-text-box'>
                    <h3>{game.title}</h3>
                    <p>{game.description}</p>
                    <p>Release Date: {game.releaseDate}</p>
                  <Button onClick= {() => this.deleteGame(game)}>Delete</Button>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
    
    }

    export default Main;