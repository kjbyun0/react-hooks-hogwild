import React from "react";
import HogTile from './HogTile';

function HogTiles({ hogList, dispConditions }) {
    // console.log("In HogTiles, hogList: ", hogList);

    const hogsFiltered = dispConditions.isGreasedOn ? (hogList.filter(hog => hog.greased)) : [...hogList];
    const hogsDispList = dispConditions.sortBy === 'None' ? hogsFiltered : 
        (dispConditions.sortBy === 'Name' ? hogsFiltered.sort((a, b) => (a.name <= b.name ? -1 : 1)) : 
            hogsFiltered.sort((a, b) => a.weight - b.weight));

    return (
        //<div className="ui three column grid cards">
        <div className="ui grid container">
            {hogsDispList.map(hog => (<HogTile key={hog.name} hog={hog} />))}
        </div>
    );
}

export default HogTiles;

