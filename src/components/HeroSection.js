import React from 'react';
import '../styles/heroSection.css';
import { Button } from 'react-bootstrap';

export default class HeroSection extends React.Component{
    render() {
        return(
            <>
                <div className="heroMaster">
                    <div className="heroSection">
                        <h1>Data is Money. <br />Literally.</h1>
                        <h2>Crypto Tracker is a cryptocurrency tracking website.</h2>
                        <Button variant='light'>Sign Up!</Button>
                    </div>
                </div>
            </>
        )
    }
}
