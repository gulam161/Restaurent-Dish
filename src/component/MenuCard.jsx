import React from "react";

function MenuCard({ menuData }) {
  return (
    <>
      <section className="main-card-container">
        {menuData.map(({ category, description, id, image, name }) => {
          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">1</span>
                  <span className="card-author subtle">{category}</span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt="image" className="card-media" />
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default MenuCard;
