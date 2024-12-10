import React from "react";
import Sidebar from "../components/SideBar";
import './Mainpage.css';
import Department from '../components/Department';

const Mainpage = () => {
    return (
        <div className="mainpagecontainer">
            <div className="header">
                <div className="logo">eduVerse</div>
                <div className="search-bar">
                    <input type="text" placeholder="Search Classes" />
                </div>
                <div className="school-info">
                    <i className="fa fa-bell"></i>
                    <i className="fa fa-user-circle"></i>
                    <div><span>Name of School</span></div>
                </div>
            </div>
            <div className="flexpage">
                <Sidebar />
                <div className="main-content">
                    <h1 style={{color: "white"}}>Welcome to Eukaristic</h1>
                    <Department/>
                
                </div>
            </div>
        </div>
    );
};

export default Mainpage;