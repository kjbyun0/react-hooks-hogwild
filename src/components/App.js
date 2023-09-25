import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

import HogTiles from "./HogTiles";

function App() {
	const [dispConditions, setDispConditions] = useState({
		isGreasedOn: false,
		sortBy: 'None',
	});
	console.log("In App, dispConditions: ", dispConditions);

	return (
		<div className="App">
			<Nav dispConditions={dispConditions} setDispConditions={setDispConditions}/>
			<HogTiles hogs={hogs} dispConditions={dispConditions} />
		</div>
	);
}

export default App;
