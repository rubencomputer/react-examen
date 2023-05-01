import React from "react";

import "../css/SlideCardText.css";

const SlideCardText = ({ group }) => {
	if (group.location == "Zapopan") {
		return (
			<>
				<span className="GroupText">{group.target}</span>
				<div style={{ display: "flex" }}>
					<span className="DoseNumber">{group.dosis}</span>
					<span className="DoseText">
						{group.dosis == 1 ? "Primera Dosis" : "Segunda Dosis"}
					</span>
				</div>
				<span className="BrandText">
					{group.vacuna == 0
						? ""
						: group.vacuna == 1
						? "PFIZER"
						: group.vacuna == 2
						? "ASTRA ZENECA"
						: ""}
				</span>
				<br></br>
				<span className="Location">{group.location}</span>
				<span className="BrandTextNote">{group.nota}</span>
			</>
		);
	} else {
		return (
			<>
				<span className="GroupText">{group.target}</span>
				<div style={{ display: "flex" }}>
					<span className="DoseNumber">{group.dosis}</span>
					<span className="DoseText">
						{group.dosis == 1 ? "Primera Dosis" : "Segunda Dosis"}
					</span>
				</div>
				<span className="BrandText">
					{group.vacuna == 0
						? ""
						: group.vacuna == 1
						? "PFIZER"
						: group.vacuna == 2
						? "ASTRA ZENECA"
						: ""}
				</span>
				<span className="BrandTextNote">{group.nota}</span>
			</>
		);
	}
};

export default SlideCardText;
