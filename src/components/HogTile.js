import React, { useState } from 'react';

function HogTile({ hog }) {
    // console.log("In HogTile, hog: ", hog);
    const [isFrontTile, setIsFrontTile] = useState(true);

    function handleHogTileClick() {
        setIsFrontTile((isFrontTile) => !isFrontTile);
    }

    function displayHogTile() {
        if (isFrontTile) {
            return (
                // <div className="column">
                <div className="ui eight wide column">
                    <div className="ui fluid card link" onClick={handleHogTileClick}>
                        <div className="image">
                            <img src={hog.image} alt={hog.name} />
                        </div>
                        <div className="content">
                            <a className="header">{hog.name}</a>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                // <div className="column">
                <div className="ui eight wide column">
                    <div className="ui fluid card link" onClick={handleHogTileClick}>
                        <div className="content">
                            <div className="header">{hog.name}</div>
                            <div className="description">
                                <p>speciality: {hog.specialty}</p>
                                <p>weight: {hog.weight}</p>
                                <p>greased: {hog.greased ? 'Yes' : 'No'}</p>
                                <p>highest medal achieved: {hog['highest medal achieved']}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    return (
        displayHogTile()
    );
}

export default HogTile;