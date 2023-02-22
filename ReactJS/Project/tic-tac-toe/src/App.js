import logo from "./logo.svg";
import React, { Component, useState } from "react";
import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const itemArr = new Array(9).fill("empty");
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArr.fill("empty", 0, 9);
  };
  const checkIsWinner = () => {
    if (
      itemArr[0] !== "empty" &&
      itemArr[0] === itemArr[1] &&
      itemArr[1] === itemArr[2]
    ) {
      setWinMessage(`${itemArr[0]} is winner`);
    } else if (
      itemArr[3] !== "empty" &&
      // 0 1 2
      //                           3 4 5
      //                           6 7 8
      itemArr[3] === itemArr[4] &&
      itemArr[4] === itemArr[5]
    ) {
      setWinMessage(`${itemArr[3]} is winner`);
    } else if (
      itemArr[6] !== "empty" &&
      itemArr[6] === itemArr[7] &&
      itemArr[7] === itemArr[8]
    ) {
      setWinMessage(`${itemArr[6]} is winner`);
    } else if (
      itemArr[0] !== "empty" &&
      itemArr[0] === itemArr[3] &&
      itemArr[3] === itemArr[6]
    ) {
      setWinMessage(`${itemArr[4]} is winner`);
    } else if (
      itemArr[1] !== "empty" &&
      itemArr[1] === itemArr[4] &&
      itemArr[4] === itemArr[7]
    ) {
      setWinMessage(`${itemArr[1]} is winner`);
    } else if (
      itemArr[2] !== "empty" &&
      itemArr[2] === itemArr[5] &&
      itemArr[5] === itemArr[8]
    ) {
      setWinMessage(`${itemArr[1]} is winner`);
    } else if (
      itemArr[0] !== "empty" &&
      itemArr[0] === itemArr[4] &&
      itemArr[4] === itemArr[8]
    ) {
      setWinMessage(`${itemArr[0]} is winner`);
    } else if (
      itemArr[6] !== "empty" &&
      itemArr[6] === itemArr[4] &&
      itemArr[6] === itemArr[2]
    ) {
      setWinMessage(`${itemArr[1]} is winner`);
    }
  };
  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    } else if (itemArr[itemNumber] === "empty") {
      itemArr[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already filled", { type: "error" });
    }
    checkIsWinner();
  };
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        {winMessage ? (
          <div className="mb-2 mt-2">
            <h1 className="text-primary text-uppercase text-center">
              {winMessage}
            </h1>
            <Button color="success" block onClick={reloadGame}>
              Reload Game
            </Button>
          </div>
        ) : (
          <h1 className="text-center text-warning">
            {isCross ? "Cross" : "Circle"} turns
          </h1>
        )}
        <Col md={6} className="offset-md-3">
          <div className="grid">
            {itemArr.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name1={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
