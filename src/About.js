import {Accordion,Image, Card} from "react-bootstrap";
import React,  { Component }  from "react";
import Layton from "./srcImages/Layton.JPG"
import Marissa from "./srcImages/Marissa.jpeg"

class About extends Component {
    render() {
        return (
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Layton Marshall</Accordion.Header>
                <Accordion.Body>
                    <Card className="h-100">
                    <Card.Img
                    className="profilePic" 
                      src={Layton}
                      />
                      <Card.Text>Junior, Tennis, Honor Society, Robotics</Card.Text>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>McCall Woodward</Accordion.Header>
                <Accordion.Body>Senior, 12 Sport Athlete, Honor Society</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Marissa Toledo</Accordion.Header>
                <Accordion.Body>Junior, Honor Society
                <Image className="profilePic" src={Marissa}
                />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Taytum Twiss</Accordion.Header>
                <Accordion.Body>Junior</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Ian Pous</Accordion.Header>
                <Accordion.Body>Junior, Robotics</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Mason Whitaker</Accordion.Header>
                <Accordion.Body>To Be Continued...</Accordion.Body>
            </Accordion.Item>
        </Accordion>
         ) }
};

export default About;