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
            details: false
        };
        this.learnMore = this.learnMore.bind(this);
    }

    learnMore() {
        this.setState({details: true});
    }

    render(){
        return(
            <div>
                 <div class="simpleResult">
                    <h2>8/10</h2>
                    <div>
                    <p style={{marginTop: '28px'}}>You should leave the house today!</p>
                     {/* the score out of ten */}
                     {/* statement that says whether user should leave the house */}
                     <button onClick={this.learnMore}>see why</button>
                     </div>
                 </div>
        
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
                </div>
                </div>
                )
            }


}

export default Result;