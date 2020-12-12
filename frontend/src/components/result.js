import React from 'react';
import { render } from 'react-dom';

export class Result extends React.Component{
    constructor(props){
        super(props)
        this.state={
            details: false
        }
    }

    learnMore() {
        this.setState({details: this.state.details});
    }

    render(){
        return(
            <div>
                 <div class="simpleResult">
                    <h2>8/10</h2>
                    <p>You should leave the house today!</p>
                     {/* the score out of ten */}
                     {/* statement that says whether user should leave the house */}
            
                 </div>
                <button onClick={this.learnMore}>see why</button>
            </div>
        )
    }


}

export default Result;