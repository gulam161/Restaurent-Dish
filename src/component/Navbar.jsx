import React from "react";

const navbar = ({ filterItem, menuList }) => {
  console.log(menuList);
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem, ind) => {
            return (
              <button
                key={ind}
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;
