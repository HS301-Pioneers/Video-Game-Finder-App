import {Accordion, Card, Container} from "react-bootstrap";
import React,  { Component }  from "react";
import Layton from "./srcImages/Layton.JPG"
import Marissa from "./srcImages/Marissa.jpeg"
import Ian from "./srcImages/Ian.png"
import Mason from "./srcImages/Mason.png"
import McCall from "./srcImages/McCall.png"
import Taytum from "./srcImages/Taytum.png"

class About extends Component {
    render() {
        return (
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Layton Marshall</Accordion.Header>
                <Accordion.Body>
                    <Container className="aboutCard">
                    <Card className="h-100">
                    <Card.Img
                    className="profilePic" 
                      src={Layton}
                      />
                      <Card.Text>Junior, Tennis, Honor Society, Robotics</Card.Text>
                      <Card.Text>"I have been looking into Rose-Hulman Institute of Technology"</Card.Text>
                    </Card>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>McCall Woodward</Accordion.Header>
                <Accordion.Body>
                <Container className="aboutCard">
                <Card className="h-100">
                    <Card.Img
                    className="profilePic" 
                      src={McCall}
                      />
                      <Card.Text>Senior, 12 Sport Athlete, Honor Society</Card.Text>
                      <Card.Text>"I am attending Oregon State University next year. I am majoring in Computer Science and Marketing."</Card.Text>
                    </Card>
                    </Container>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Marissa Toledo</Accordion.Header>
                <Accordion.Body>
                <Container className="aboutCard">
                <Card className="h-100">
                    <Card.Img
                    className="profilePic" 
                      src={Marissa}
                      />
                      <Card.Text>Junior, Honor Society</Card.Text>
                      <Card.Text>"I plan to attend a 4 year university"</Card.Text>
                    </Card>
            </Container>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Taytum Twiss</Accordion.Header>
                <Accordion.Body>
                <Container className="aboutCard">
                <Card className="h-100">
                    <Card.Img
                    className="profilePic" 
                      src={Taytum}
                      />
                      <Card.Text>Junior</Card.Text>
                      <Card.Text>"Start my college career at COCC then attend a university"</Card.Text>
                    </Card>
                </Container>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Ian Pous</Accordion.Header>
                <Accordion.Body>
                <Container className="aboutCard">
                <Card className="h-100">
                    <Card.Img
                    className="profilePic" 
                      src={Ian}
                      />
                      <Card.Text>Junior, Robotics</Card.Text>
                      <Card.Text>"I plan to attend Virginia Tech or the Oregon Institute of Technology"</Card.Text>
                    </Card>
                </Container>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Mason Whitaker</Accordion.Header>
                <Accordion.Body>
                <Container className="aboutCard">
                <Card className="h-100">
                    <Card.Img
                    className="profilePic" 
                      src={Mason}
                      />
                      <Card.Text>Junior, Reading, Gaming</Card.Text>
                      <Card.Text>"After highschool I plan to attend COCC and get my associates degree"</Card.Text>
                    </Card>
                </Container>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
         ) }
};

export default About;