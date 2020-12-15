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
            isLoaded: false,
            items: {
                "uv": null,
                "temp": null,
                "covid": null,
                "goout": false
            },
            loc: null,
        };
        this.handleLearnMore = this.handleLearnMore.bind(this);
    }

    handleLearnMore() {
        this.setState({learningMore: true});
    }

    componentDidMount(){
        var url = 'https://final-project-comp20.herokuapp.com/api/rate/country/?location=S.%20Korea';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('This is the data', data);
                this.setState({
                    isLoaded: true,
                    items: data
                    // uv: result.uv,
                    // temp: result.temp,
                    // covid: result.covid
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

   

    render(){
        const learningMore = this.state.learningMore;
        const {error, isLoaded, items} = this.state;
        let score = '3/5';
        // if goout is true, print "You should go out today!", if goout is false, print
        // "Maybe you should stay in today..."
        let message = 'You should go out today!';
        let details;
        console.log("hey you this iekjfbwkjebfw");
        console.log(this.props.match.params.id.substring(1));
        // const query = new URLSearchParams(this.props.location.search);
        // console.log("what is props? " + this.props);
        // console.log(query.get("loc"));

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
                    <h2>{score}</h2>
                    <div>
                    <p style={{marginTop: '28px'}}>{message}</p>
                     {/* the score out of ten */}
                     {/* statement that says whether user should leave the house */}
                     <button onClick={this.handleLearnMore}>see why</button>
                     <p></p>
                     </div>
                 </div>
                 {details}
                 {/* {this.state.items.map(item => (
                     <div key={item.uv}>{item.uv} {item.temp}</div>
                 ))} */}
                 {console}
            </div>
        );
    }
}

export default Result;