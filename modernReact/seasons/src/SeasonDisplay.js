import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold!!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter': 'summer';
    }
}

const SeasonDisplay = (props) => { 
    const season = getSeason(props.latitude, new Date().getMonth());
    //console.log(season);
    const { text, iconName } = seasonConfig[season];
    return(
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon-left massive icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} massive icon-right icon`} />
        </div>
    )
}
export default SeasonDisplay;