import React from 'react';

import logo from '../assets/logo.svg'
import dislike from '../assets/'

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/1500873?v=4" alt="" />
                    <footer>
                        <strong>Mhayk Whandson</strong>
                        <p>Programador apaixonado!</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={} />
                        </button>
                        <button type="button">
                            <img src={} />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}