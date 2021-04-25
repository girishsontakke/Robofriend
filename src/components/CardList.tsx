import React from "react";
import Card from "./Card";

interface Props {
  robots: any[];
}

const CardList: React.FC<Props> = ({ robots }) => {
  return (
    <div style={{ margin: "0 auto", width: "80%" }}>
      {robots.map((user, i) => {
        return (
          <Card key={i} id={user.id} name={user.name} email={user.email} />
        );
      })}
    </div>
  );
};

export default CardList;
