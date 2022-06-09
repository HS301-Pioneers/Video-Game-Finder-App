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
    try {
      const url = `https://game-finder-api.herokuapp.com/wishlist`;
      const gamesResponse = await axios.get(url);
      this.setState({ games: gamesResponse.data });
    } catch (error) {
      console.error(error);
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

  render() {
    return (
      <>
        {this.state.games.length > 0 &&
          <Container id="cards">
            <Row xs={1} md={2} lg={3} xl={3} >
              {this.state.games.map((game, idx) => (
                <Col>
                  <Card key={Math.random() * 100} id="card" className="h-100">
                    <Card.Img 
                      src={game.backgroundImg}
                      alt={game.gameName}
                    />       
                    <Card.Title>{game.gameName}</Card.Title>
                    <Card.Text>{game.release_date}</Card.Text>
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