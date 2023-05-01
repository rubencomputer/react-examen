import React from "react";
import "./css/Footer.css";

import RedDeVacunacionRadarJalisco from "./assets/img_reddevacunacion.svg";
import CuidarseEsPrevenir from "./assets/img_cuidarseesprevenir.svg";
import Salud from "./assets/img_salud.svg";
import ServSalud from "./assets/img_serviciosdesaludjalisco.svg";
import Samu from "./assets/img_samu.svg";
import GobMexicoSedena from "./assets/img_gobiernodemexicosedena.png";
import Bienestar from "./assets/img_bienestar.svg";

const Footer = () => {
	return (
		<>
			<div className="Footer">
				<img
					src={RedDeVacunacionRadarJalisco}
					alt="Logo de Jalisco se Defiende"
					width={152}
					height={63}
				></img>
				<img
					src={CuidarseEsPrevenir}
					alt="Logo de Jalisco se Defiende"
					width={152}
					height={63}
				></img>
				<img
					src={Salud}
					alt="Logo de Jalisco se Defiende"
					width={152}
					height={63}
				></img>
				<img
					src={ServSalud}
					alt="Logo de Jalisco se Defiende"
					width={152}
					height={63}
				></img>
				<img
					src={Samu}
					alt="Logo de Jalisco se Defiende"
					width={152}
					height={63}
				></img>
				<img
					src={GobMexicoSedena}
					alt="Logo de Jalisco se Defiende"
					width={152}
					height={63}
				></img>
				<img
					src={Bienestar}
					alt="Logo de Jalisco se Defiende"
					width={152}
					height={63}
				></img>
			</div>
		</>
	);
};

export default Footer;
