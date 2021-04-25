import React from "react";

interface Props {
  searchChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const SearcBox: React.FC<Props> = (props) => {
  return (
    <input
      onChange={props.searchChange}
      className="pa3 ba b--green bg-lightest-blue mb3"
      type="search"
      placeholder="search robots"
    />
  );
};

export default SearcBox;
