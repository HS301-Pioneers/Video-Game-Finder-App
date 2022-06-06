import React from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
class FavoriteGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      showForm: false
    }
  }


  componentDidMount = async () => {
    console.log('function fired off');
    try {
      const url = `https://game-finder-api.herokuapp.com/wishlist`;
      const gamesResponse = await axios.get(url);
      console.log(gamesResponse.data);
      this.setState({ games: gamesResponse.data });
    } catch (error) {
      console.log(error);
    }


  }


  deleteGame = async (gameToBeDeleted) => {
    try {
      const proceed = window.confirm(`Do you want to delete ${gameToBeDeleted.gameName}?`);

      if (proceed) {
        let newGames = this.state.games.filter(game => game._id !== gameToBeDeleted._id);
        this.setState({ games: newGames });
        const config = {
          method: "delete",
          baseURL: process.env.REACT_APP_SERVER,


          url: `/wishlist/${gameToBeDeleted._id}`
        };
        await axios(config);
      }
    } catch (error) {
      console.error(error);
    }
  }
  handleClose = () => this.setState({ showForm: false })

  // createGame = async newGame => {
  //   const config = {
  //     method: "post",
  //     baseURL: process.env.REACT_APP_SERVER,
  //     url: "/wishlist/",
  //     data: newGame
  //   };
  //   const gameResults = await axios(config);
  //   const updatedGames = [...this.state.games, gameResults.data];
  //   this.setState({ games: updatedGames })
  // }
  render() {
    return (
      <>
        <h3>favorite games coming soon..</h3>
        {this.state.games.length &&
          <Container>
            <Row xs={1} md={2} lg={3} xl={3} >

              {this.state.games.map((game, idx) => (

                <Col>
                  <Card key={Math.random() * 100} id="card">
                    <Card.Title>{game.gameName}</Card.Title>
                    <Card.Text>{game.release_date}</Card.Text>
                    <Card.Img 
                      src={game.backgroundImg}
                      alt={game.gameName}
                    />
                    <Button onClick={() => this.deleteGame(game)}>Delete</Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        }
      </>


    )
  }


}


export default FavoriteGames;