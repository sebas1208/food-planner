import React from "react";
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero is-large has-background-warning-light mt-7 ml-8 mr-8">
        <div className="hero-body">
          <h1 className="is-size-1 has-text-centered has-text-grey-dark">
            FoodPlanner!
          </h1>
          <h2 className="is-size-3 has-text-grey-dark">
            What is FoodPlanner!?
          </h2>
          <br />
          <br />
          <p className="subtitle">
            FoodPlanner is an app to build and plan your meals for all your
            week.
          </p>
          <p className="subtitle">
            You can search recipes by ingredients, names, types, etc.
          </p>
          <p className="subtitle">
            Add your meal to your plan and FoodPlanner! will create a shopping
            list ready for you.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
