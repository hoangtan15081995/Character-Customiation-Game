import React from "react";

function Header({ title, subTitle }) {
  return (
    <>
      <div className="header">
        <div>{title}</div>
        <div>{subTitle}</div>
      </div>
    </>
  );
}

export default Header;
