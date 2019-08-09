import React from "react";
import "./Main.css";

import logo from "../assets/logo.svg";
import dislike from "../assets/dislike.svg";
import like from "../assets/like.svg";

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img
            src="https://avatars0.githubusercontent.com/u/1500873?v=4"
            alt=""
          />
          <footer>
            <strong>Mhayk Whandson</strong>
            <p>Programador apaixonado!</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="" />
            </button>
            <button type="button">
              <img src={like} alt="" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars0.githubusercontent.com/u/1500873?v=4"
            alt=""
          />
          <footer>
            <strong>Mhayk Whandson</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              libero illum possimus itaque asperiores, optio autem placeat earum
              magni, aperiam consectetur excepturi dolor rem quos, temporibus
              blanditiis vero distinctio ipsum?
            </p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="" />
            </button>
            <button type="button">
              <img src={like} alt="" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars0.githubusercontent.com/u/1500873?v=4"
            alt=""
          />
          <footer>
            <strong>Mhayk Whandson</strong>
            <p>Programador apaixonado!</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="" />
            </button>
            <button type="button">
              <img src={like} alt="" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars0.githubusercontent.com/u/1500873?v=4"
            alt=""
          />
          <footer>
            <strong>Mhayk Whandson</strong>
            <p>Programador apaixonado!</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="" />
            </button>
            <button type="button">
              <img src={like} alt="" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
