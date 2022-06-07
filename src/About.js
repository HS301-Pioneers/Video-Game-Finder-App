import {Accordion,Image} from "react-bootstrap";
import React,  { Component }  from "react";
import Layton from "./srcImages/Layton.JPG"


class About extends Component {
    render() {
        return (
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Layton Marshall</Accordion.Header>
                <Accordion.Body>Junior, Tennis, Honor Society, Robotics
                <Image className="profilePic" src={Layton}
                />
                </Accordion.Body>
               
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>McCall Woodward</Accordion.Header>
                <Accordion.Body>Junior, Tennis, Honor Society, Robotics</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Layton Marshall</Accordion.Header>
                <Accordion.Body>Junior, Tennis, Honor Society, Robotics</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Layton Marshall</Accordion.Header>
                <Accordion.Body>Junior, Tennis, Honor Society, Robotics</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Layton Marshall</Accordion.Header>
                <Accordion.Body>Junior, Tennis, Honor Society, Robotics</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Layton Marshall</Accordion.Header>
                <Accordion.Body>Junior, Tennis, Honor Society, Robotics</Accordion.Body>
            </Accordion.Item>
        </Accordion>
         ) }
};

export default About;