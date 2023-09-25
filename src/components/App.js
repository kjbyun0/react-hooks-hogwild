import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

import HogTiles from "./HogTiles";
import NewHogForm from "./NewHogForm";

function App() {
	const [dispConditions, setDispConditions] = useState({
		isGreasedOn: false,
		sortBy: 'None',
	});
	const [hogList, setHogList] = useState(hogs);
	
	function addNewHog(hogObj) {
		setHogList([...hogList, hogObj]);
	}

	// console.log("In App, dispConditions: ", dispConditions);

	return (
		<div className="App">
			<Nav dispConditions={dispConditions} setDispConditions={setDispConditions} />
			<NewHogForm addNewHog={addNewHog} />
			<HogTiles hogList={hogList} dispConditions={dispConditions} />
		</div>
	);
}

export default App;
