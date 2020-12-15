/*  Locations list
    Created on 12/12/2020 by Carys Kong
*/

import React from 'react';
import { render } from 'react-dom';
import ProgressBar from "./progressBar.js";
import FrownyFace from "./frownyFace.png";

export class Result extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error: null,
            learningMore: false,
            isLoaded: true,
            items: []
        };
        this.handleLearnMore = this.handleLearnMore.bind(this);
    }

    handleLearnMore() {
        this.setState({
            learningMore: true,
            items: this.state.items
        });
    }

    componentDidMount(){
        var url = "https://final-project-comp20.herokuapp.com/api/rate/country/?location=S.%20Korea";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let array = [];
            for (let key in data){
                let newObj = {};
                newObj[key] = data[key];
                array.push(newObj);
            }
            this.setState({
                items: array
            })
            console.log(this.state.items);
            }
        )
    }

    getLocation = () => {
        let querystring = this.props.match.params.id.substring(0);
        let placindexComma = querystring.indexOf(",");
        let place = querystring.substring(0, placindexComma);
        let worldOption = querystring.substring(placindexComma + 1);

        let returnObj = {};
        returnObj["place"] = place;
        returnObj["worldOption"] = worldOption;
        return returnObj;
    }

    render(){
        const learningMore = this.state.learningMore;
        let score;
        // console.log(this.state.items[3]);
        // let goOut =  Boolean.parseBoolean(this.state.items[3]['goout']);
        // if (goOut['goout'] == 'false'){
        //     score = <img src={FrownyFace} alt="FrownyFace"/>;
        // } else {
        //     score = <img src={FrownyFace} alt="FrownyFace"/>;
        // }
        // let avgScore = (this.state.items[0]['uv'] + this.state.items[1]['temp'] + this.state.items[2]['covid'])/3;
        // let score = avgScore + '/5';
        // if goout is true, print "You should go out today!", if goout is false, print
        // "Maybe you should stay in today..."
        let message = 'You should go out today!';
        let details;
        let querystring = this.props.match.params.id.substring(1);
        let placindexComma = querystring.indexOf(",");
        let place = querystring.substring(0,placindexComma);
        let worldOption = querystring.substring(placindexComma+1);
        // console.log(this.props.match.params.id.substring(1));
        console.log("place: ", place)
        console.log("worldoption: ", worldOption)  

        if (learningMore){
            details = 
            <div class="detailedResult">
                <div class="individualResult">
                        <p style= {{marginRight: '20px'}}>UV INDEX</p>
                        <ProgressBar completed={this.state.items[0]['uv']*20}/>
                        <p style={{marginLeft: '20px', width: '30px'}}>{this.state.items[0]['uv']}</p>
                    </div>
                    <div class="individualResult">
                        <p style= {{marginRight: '20px'}}>TEMP</p>
                        <ProgressBar completed={this.state.items[1]['temp']*20}/>
                        <p style={{marginLeft: '20px', width: '30px'}}>{this.state.items[1]['temp']}</p>
                    </div>
                    <div class="individualResult">
                        <p style= {{marginRight: '20px'}}>COVID-19</p>
                        <ProgressBar completed={this.state.items[2]['covid']*20}/>
                        <p style={{marginLeft: '20px', width: '30px'}}>{this.state.items[2]['covid']}</p>
                    </div>
                </div>;
        } else {
            details = <p></p>;
        }

        return(
            <div>
                 <div class="simpleResult">
                    {score}
                    <div>
                    <p style={{marginTop: '35px'}}>{message}</p>
                     {/* the score out of ten */}
                     {/* statement that says whether user should leave the house */}
                     <button onClick={this.handleLearnMore}>see why</button>
                     <p></p>
                     </div>
                 </div>
                 {details}
                    {/* {items.map(item =>(
                        <div key={item.uv}>{item.uv} {item.temp}></div>
                    ))} */}
            </div>
        );
    }
}

export default Result;