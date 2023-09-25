import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ dispConditions, setDispConditions }) => {

	function handleIsGreasedOnBtn() {
		setDispConditions({
			...dispConditions,
			isGreasedOn: !dispConditions.isGreasedOn,
		});
	}

	function handleSortByChange(e) {
		setDispConditions({
			...dispConditions,
			sortBy: e.target.value,
		});
	}

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<br />
			<label>Greased filter: </label>
			<button onClick={handleIsGreasedOnBtn}>{dispConditions.isGreasedOn ? 'On' : 'Off'}</button>
			<br />
			<label>Sort By: </label>
			<select value={dispConditions.sortBy} placeholder='select options...' onChange={handleSortByChange}>
				<option value='None'>None</option>
				<option value='Name'>Name</option>
				<option value='Weight'>Weight</option>
			</select>
		</div>
	);
};

export default Nav;
