import React from "react";
import { Card } from "react-bootstrap";
import hike from "../components/images/hike.png";
import dance from "../components/images/dance.jpg";
import sport from "../components/images/sport.jpg";
import movie from "../components/images/movie.jpg";
import cook from "../components/images/cook.jpg";
import photo from "../components/images/photograph.jpg";
import read from "../components/images/read.jpg";
import code from "../components/images/coding.jpg";
const Hobbies = () => {
  return (
    <>
      <div className="main d-flex flex-wrap justify-content-between ">
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={hike} />
          <Card.Body>
            <Card.Title>Hiking</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={dance} />
          <Card.Body>
            <Card.Title>Dancing</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={sport} />
          <Card.Body>
            <Card.Title>Training</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={movie} />
          <Card.Body>
            <Card.Title>Watching Movies</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} className="mt-5">
          <Card.Img variant="top" src={cook} />
          <Card.Body>
            <Card.Title>Cooking</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} className="mt-5">
          <Card.Img variant="top" src={photo} />
          <Card.Body>
            <Card.Title>Taking Photos</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} className="mt-5">
          <Card.Img variant="top" src={read} />
          <Card.Body>
            <Card.Title>Reading Books</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} className="mt-5">
          <Card.Img variant="top" src={code} />
          <Card.Body>
            <Card.Title>Coding</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Hobbies;
