import React from "react";
import './homePage.css'
import P1 from '../../asset/clu2.jpg'
import insta from '../../asset/instagram.png'
import Balmain from '../../asset/Balmain.jpg'
// @ts-ignore
import VideBg from '../../asset/bg.mp4'


function homePage()  {
    return (
        <div className="GlobalLayout">
            <div className="header">
                <div className="headerTitle">
                    @Loguiso
                </div>
                <div className="headerIcon">
                    <a href="src/pages/home/homePage"> <img src={insta} width={22} color="white"/></a>
                </div>
            </div>
{/*
            ///FIST CONTENT ELEMENT
*/} <div className="videoBg">
            <video src={VideBg} autoPlay loop muted/>
        </div>

            <div className="content">
                <div className="content1">
                    <div className="contentTitle"> Fashion </div>
                    <div className="contentTitle"> Club </div>
                    <div className="contentTitle"> Event.</div>
                </div>
                <div className="content2">
                    <hr className="line"></hr>
                    <p className="contentTitle2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor. </p>
                    <button className="btn"> <span className="btnText"> Let's work &spades;</span> </button>
                </div>
            </div>
{/*
            SECOND CONTENT ELEMENT
*/}


            <div className="Layout1">
                <div className="content1">
                    <div className="credit"> Photography - @Loguiso</div>
                    <img className="image" alt="P1" src={Balmain} width="90%"/>
                </div>
                <div className="contentElement2">
                    <hr className="contentElement2line"></hr>
                    <div className="contentElement2Fashion"> Fashion </div>
                    <p className="contentElement2Title"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. </p>
                    <p className="contentElement2Title" >&larr;	 View Project</p>
                </div>
            </div>


            {/*
            SECOND CONTENT ELEMENT
*/}

            <div className="contentM">
                <div className="contentElement2L">
                    <hr className="contentElement2line"></hr>
                    <div className="contentElement2Fashion"> Club </div>
                    <p className="contentElement2Title"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.. </p>
                    <p className="contentElement2Title">  View Project &rarr;	 </p>
                </div>
                <div className="content1">
                    <div className="credit"> Photography - @Loguiso</div>
                    <img className="image" alt="P1" src={P1} width="90%"/>
                </div>
            </div>
        </div>
    );
}

export default homePage;
