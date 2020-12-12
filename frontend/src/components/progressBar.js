import React from "react";

const ProgressBar = (props) => {
    const {completed} = props;

    const containerStyle = {
        height: 20,
        width: '100%',
        backgroundColor: '#ffff',
        borderRadius: 50,
        margins: 10,
        justifyContent: 'center'
        
    }

    const fillerStyle = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: '#608FDA',
        borderRadius: 'inherit',
        justifyContent: 'center'
    }

    return (
        <div style={containerStyle}>
            <div style={fillerStyle}>
                {/* <span>{`${completed}%`}</span> */}
            </div>
        </div>
    );
};

export default ProgressBar;