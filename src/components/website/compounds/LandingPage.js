import React from 'react';
import './LandingPage.css';
import Header from '../molecules/Header/Header';
import Bubble from '../atoms/bubble/Bubble';
import Button from '../atoms/button/Button';

function LandingPage() {
  return (
    <div id="landing-page">
        <Bubble height="15vw" width="15vw" backgroundColor="#b6899e45" top="0" right="0"/>
        <Bubble height="18vw" width="18vw" backgroundColor="#899a824f" bottom="0" left="0" type="offset"/>
        <Bubble height="5vw" width="5vw" backgroundColor="#899a824f" top="35%" left="53%" transformX="20%" transformY="-120%"/>
        <div id="landing-page-container">
            <Header></Header>
            <div id="welcome-note">
                <h1>Find Missing Items</h1>
                <p>We are a community of people helping each others to find missing items.</p>
                <div style={{display:'flex'}}>
                    <Button backgroundColor="#B6899E"><a href="/">Find Item</a></Button>
                    <Button backgroundColor="#899A82"><a href="/">Upload Item</a></Button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;
