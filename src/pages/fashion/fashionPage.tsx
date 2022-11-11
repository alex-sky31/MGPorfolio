
import React from "react";
import './fashionPage.css';
import  insta from '../../asset/instagram.png';
// @ts-ignore
import VideBg from '../../asset/bg.mp4';




function fashionPage()  {

    return (
        <div className="GlobalLayouth">
            <div className="headers">
                <div className="headerTitle">
                    @Loguiso
                </div>
                <div className="headerIcon">
                    <a href="src/pages/home/homePage"> <img src={insta} width={22} color="white"/></a>
                </div>
            </div>

            <div className="test">
                <video src={VideBg} autoPlay loop muted/>
            </div>
            <div className="content">
                <div className="content1">
                    <div className="contentTitle"> Fashion </div>
                    <div className="contentTitle"> Club </div>
                    <div className="contentTitle"> Life.</div>
                </div>
                <div className="content2">
                    <hr className="line"></hr>
                    <p className="contentTitle2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor. </p>
                    <button className="btn"> <span className="btnText"> Let's work &spades;</span> </button>
                </div>
            </div>

        </div>

    );
}

export default fashionPage;
