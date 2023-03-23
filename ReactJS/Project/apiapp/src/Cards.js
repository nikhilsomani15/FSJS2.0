import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { FaMapMarkedAlt, FaEnvelope, FaPhone } from "react-icons/fa";
export const Cards = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          src={details.picture?.large}
          alt=""
          height="150px"
          width="150px"
          className="rounded-circle img-thumbnail border-danger"
        />
        <CardTitle className="text-primary">
          <h1>
            {`${details.name?.title}  `}
            {details.name?.first}
            {details.name?.last}
          </h1>
        </CardTitle>
        <CardText>
          <FaMapMarkedAlt />
          {details.location?.country}
          <br />
            <FaPhone />
            {details.phone}
          <br />
          
            <FaEnvelope />
            {details.email}
          
        </CardText>

      </CardBody>
    </Card>
  );
};
