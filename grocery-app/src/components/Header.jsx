import React from "react";
import Button from "./Button";

const Header = ({ showForm, changeTextAndColor }) => {
  return (
    <header className="header items-center flex justify-between mb-4">
      <h2 className="app-header">Grocery List</h2>
      <Button
        color={changeTextAndColor ? "red" : "green"}
        onClick={showForm}
        text={changeTextAndColor ? "Close" : "Add"}
      />
    </header>
  );
};

export default Header;
