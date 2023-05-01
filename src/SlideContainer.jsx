import React from "react";

import SlideCard from "./SlideCard/SlideCard";

import "./css/SlideContainer.css";

function vaccineGroup(target, dosis, vacuna, nota, location) {
	this.target = target;
	this.dosis = dosis;
	this.vacuna = vacuna;
	this.nota = nota;
	this.location = location;
}

const groups = [
	new vaccineGroup("Personas de 18 y mas", "1", "0", "", ""),
	new vaccineGroup(
		"Personas de 18 y mas",
		"2",
		"2",
		"Primera dosis aplicada antes del 15 de agosto",
		""
	),
];

let cards = [];

for (let i in groups) {
	cards.push(
		<SlideCard
			key={i}
			group={{
				target: groups[i].target,
				dosis: groups[i].dosis,
				vacuna: groups[i].vacuna,
				nota: groups[i].nota,
				location: groups[i].location,
			}}
		></SlideCard>
	);
}

const SlideContainer = () => {
	return (
		<>
			<div className="SlideContainer">{cards}</div>
		</>
	);
};

export default SlideContainer;
