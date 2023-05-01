import React from "react";
import "./css/Header.css";

import jaliscoSeDefiendeLogo from "./assets/logo_jaliscosedefiende.svg";
import jaliscoLogo from "./assets/logo_jal.svg";
import avisoDePrivacidadIcon from "./assets/ico_avisoprivacidad.svg";

const Header = () => {
	return (
		<>
			<div className="Header">
				<div className="HeaderContents">
					<div className="HeaderLeftSide">
						<img
							src={jaliscoSeDefiendeLogo}
							alt="Logo de Jalisco se Defiende"
							width={173.46}
							height={60}
						></img>
						<div className="SeparatorLine"> </div>
						<img
							src={jaliscoLogo}
							alt="Logo del gobierno de Jalisco"
							width={173.46}
							height={60}
						></img>
					</div>
					<div className="HeaderRightSide">
						<h4 className="Calculadora" href="#">
							Calculadora
						</h4>
						<div
							style={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<img
								src={avisoDePrivacidadIcon}
								width={19.41}
								height={19.41}
								style={{ paddingRight: "5px" }}
							></img>
							<h4 href="#" style={{ width: "max-content" }}>
								Aviso de privacidad
							</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
