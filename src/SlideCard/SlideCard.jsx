import React from "react";

import "../css/SlideCard.css";

import SlideCardPicture from "./SlideCardPicture";
import SlideCardText from "./SlideCardText";

const SlideCard = ({ group }) => {
	return (
		<>
			<div className="SlideCard">
				<div className="CardContainer">
					<SlideCardPicture></SlideCardPicture>
					<SlideCardText
						group={{
							target: group.target,
							dosis: group.dosis,
							vacuna: group.vacuna,
							nota: group.nota,
							location: group.location,
						}}
					></SlideCardText>
				</div>
			</div>
		</>
	);
};

export default SlideCard;
