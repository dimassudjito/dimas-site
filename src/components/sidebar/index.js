import React from 'react';
import '../../App.css'

const Sidebar = () => {
  return (
    <div>
        <h2 className="border-bottom p-2">Dimas A.<br/>Sudjito</h2>
        <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link active text-dark" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active text-dark" href="https://drive.google.com/file/d/18XYlmKWMx-WCN0boCMqgby_QrxJc4kFb/view?usp=sharing">Resume</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active text-dark" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active text-dark" href="/activity">Activity</a>
            </li>
        </ul>
    </div>
  );
};

export default Sidebar;
