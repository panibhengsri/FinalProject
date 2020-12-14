/*  Locations list
    Created on 12/12/2020 by Carys Kong
*/

import React from 'react';
import { render } from 'react-dom';
import ProgressBar from "./progressBar.js";

export class Result extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error: null,
            learningMore: false,
            goout: null,
            locations: []
        };
        this.handleLearnMore = this.handleLearnMore.bind(this);
    }

    handleLearnMore() {
        this.setState({learningMore: true});
    }

    componentDidMount(){
        fetch('https://final-project-comp20.herokuapp.com/api/rate/country/?location=S.%20Korea')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    goout: true,
                    locations: result.locations
                    // uv: result.uv,
                    // temp: result.temp,
                    // covid: result.covid
                });
            },

            (error) => {
                this.setState({
                    goout: true,
                    error
                })
            }
        )
    }

    render(){
        const learningMore = this.state.learningMore;
        let details;

        if (learningMore){
            details = 
            <div class="detailedResult">
                <div class="individualResult">
                        <p style= {{marginRight: '20px'}}>UV INDEX</p>
                        <ProgressBar completed={90}/>
                        <p style={{marginLeft: '20px', width: '30px'}}>9.0</p>
                    </div>
                    <div class="individualResult">
                        <p style= {{marginRight: '20px'}}>TIME</p>
                        <ProgressBar completed={50}/>
                        <p style={{marginLeft: '20px', width: '30px'}}>5.0</p>
                    </div>
                    <div class="individualResult">
                        <p style= {{marginRight: '20px'}}>TEMP</p>
                        <ProgressBar completed={80}/>
                        <p style={{marginLeft: '20px', width: '30px'}}>8.0</p>
                    </div>
                    <div class="individualResult">
                        <p style= {{marginRight: '20px'}}>COVID-19</p>
                        <ProgressBar completed={100}/>
                        <p style={{marginLeft: '20px', width: '30px'}}>10.0</p>
                    </div>
                </div>;
        } else {
            details = <p></p>;
        }

        return(
            <div>
                 <div class="simpleResult">
                    <h2>4/5</h2>
                    <div>
                    <p style={{marginTop: '28px'}}>You should leave the house today!</p>
                     {/* the score out of ten */}
                     {/* statement that says whether user should leave the house */}
                     <button onClick={this.handleLearnMore}>see why</button>
                     </div>
                 </div>
                 {details}
            </div>
        )
    }
}

export default Result;