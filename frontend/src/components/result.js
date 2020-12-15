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
            isLoaded: true,
            items: []
        };
        this.handleLearnMore = this.handleLearnMore.bind(this);
    }

    handleLearnMore() {
        this.setState({learningMore: true});
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
                this.state.items.push(newObj);
            }
            console.log(this.state.items);
            // console.log(array);
            //     this.setState({
            //         isLoaded: false,
            //         items: data.uv
            //     });
            // },
            // (error) => {
            //     this.setState({
            //         isLoaded: false,
            //         error
            //     });
            }
        )
    }

    render(){
        const learningMore = this.state.learningMore;
        // const allScores = 
        let score = '3/5';
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
        // const allScores = Object.entries(items).forEach(entry => {
        //     const [key, value] = entry;
        // });    
        // console.log(allScores);

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
                        {/* {Object.entries(items).map(([key,value]) =>( */}
                        {/* // <li> {item.temp}</li>
                        // <p>{item}</p>
                        
                        <div>{key}:{value.toString()}<br/></div>
                    ))} */}
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
                    {/* {items.map(item =>(
                        <div key={item.uv}>{item.uv} {item.temp}></div>
                    ))} */}
            </div>
        );
    }
}

export default Result;