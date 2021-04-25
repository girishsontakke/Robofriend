import React from "react";

interface Props {
  id: number;
  name: string;
  email: string;
}

const Card: React.FC<Props> = ({ id, name, email }) => {
  return (
    <div
      className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5 "
      style={{ cursor: "pointer" }}
    >
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2> {name} </h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
