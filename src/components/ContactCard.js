import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, number, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" style={{width: '50px', height: '50px'}} />
      <div className="content" style={{lineHeight: '1.6'}}>
        <div className="header">{name}</div>
        <div>{number}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "crimson", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;