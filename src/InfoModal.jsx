import React, { useEffect, useState } from "react";
import axios from "axios";

import "./css/InfoModal.css";
import iconUser from "./assets/ico_user.svg";
import SlideContainer from "./SlideContainer";

import leftArrow from "./assets/ico_right.svg";
import rightArrow from "./assets/ico_right.svg";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:3000/citizen/";
let CURP = "";

let vowels = ["a", "e", "i", "o", "u"];
let stateCodes = [
	"as",
	"bs",
	"cl",
	"cs",
	"df",
	"gt",
	"hg",
	"mc",
	"ms",
	"nl",
	"pl",
	"qr",
	"sl",
	"tc",
	"tl",
	"yn",
	"ne",
	"bc",
	"cc",
	"cm",
	"ch",
	"dg",
	"gr",
	"jc",
	"mn",
	"nt",
	"oc",
	"qt",
	"sp",
	"sr",
	"ts",
	"vz",
	"zs",
];

const InfoModal = () => {
	const [curp, setCurp] = useState("");
	const [isValid, setValid] = useState(false);

	const validate = (curp) => {
		console.log("-------------------------");
		curp = curp.toLowerCase();
		let curpArray = curp.split("");
		let birthArray = curpArray.slice(4, 10);
		let stateArray = curpArray.slice(11, 13);
		let fixedBirthArray = [
			birthArray[0] + birthArray[1],
			birthArray[2] + birthArray[3],
			birthArray[4] + birthArray[5],
		];

		//valida la cantidad de numeros
		if (curp.length != 18) {
			return false;
		}
		console.log("18 letras OK");

		//valida las letras
		if (
			!(
				/[a-zA-Z]/.test(curpArray[0]) &&
				/[a-zA-Z]/.test(curpArray[1]) &&
				/[a-zA-Z]/.test(curpArray[2]) &&
				/[a-zA-Z]/.test(curpArray[3])
			)
		) {
			return false;
		}
		console.log("4 letras OK");

		//valida la fecha de nacimiento
		console.log(fixedBirthArray);
		if (
			!(
				parseInt(fixedBirthArray[2]) > 0 &&
				parseInt(fixedBirthArray[2]) <= 31
			)
		) {
			return false;
		}
		console.log("Dia de nacimiento OK");

		if (
			!(
				parseInt(fixedBirthArray[1]) > 0 &&
				parseInt(fixedBirthArray[1]) < 13
			)
		) {
			return false;
		}
		console.log("Mes de nacimiento OK");

		//valida el genero
		if (!(curpArray[10] == "h" || curpArray[10] == "m")) {
			return false;
		}
		console.log("Gender OK");

		//valida la entidad de nacimiento
		let citState = stateArray[0] + stateArray[1];
		if (!stateCodes.find((e) => e == citState)) {
			return false;
		}
		console.log("state code OK");
		//valida las consonantes
		if (!vowels.find((e) => e == curpArray[13]) == undefined) {
			return false;
		}

		console.log("primera consonante OK");

		if (!vowels.find((e) => e == curpArray[14]) == undefined) {
			return false;
		}

		console.log("segunda consonante OK");

		if (!vowels.find((e) => e == curpArray[15]) == undefined) {
			return false;
		}

		console.log("tercera consonante OK");
		//revisa que haya homoclave

		if (!(parseInt(curpArray[16]) - parseInt(curpArray[16]) == 0)) {
			return false;
		}
		console.log("primera hc OK");
		if (!(parseInt(curpArray[17]) - parseInt(curpArray[17]) == 0)) {
			return false;
		}
		console.log("segunda hc OK");

		console.log("Curp OK!");

		return true;
	};

	useEffect(() => {
		const isValid = validate(curp);
		setValid(isValid);
		console.log("isValid:", isValid);
	}, [curp]);

	return (
		<>
			<div className="ModalBox">
				<div className="ModalContent">
					<h1 className="ModalTitle">
						Campañas activas de vacunación<br></br>
						contra Covid-19 (ZMG)
					</h1>
					<div className="ModalBody">
						<div className="SlideNav">
							<div className="LeftArrow">
								<img
									src={leftArrow}
									className="LeftArrowImg"
								></img>
							</div>
							<SlideContainer></SlideContainer>
							<div className="Right">
								<img src={leftArrow}></img>
							</div>
						</div>

						<div className="Divisor"></div>
						<h2 style={{ color: "#37AEFE" }}>Comenzar ahora</h2>

						<p style={{ fontSize: "20px" }}>
							Ingresa tu curp para agendar una cita<br></br> o
							para <a>cancelar una cita</a> ya registrada.
						</p>
						<div className="CurpForm">
							<div className="InputContainer">
								<img
									src={iconUser}
									width="18px"
									height="18px"
								></img>
								<input
									className="CurpInput"
									placeholder="Introduce tu CURP"
									value={curp}
									onChange={(e) => setCurp(e.target.value)}
								></input>
							</div>{" "}
							<button
								className="CurpCheckButton"
								disabled={!isValid}
							>
								<Link
									className="LinkTO"
									to="/curp"
									state={[{ from: curp }]}
									style={{
										pointerEvents: isValid
											? "auto"
											: "none",
									}}
								>
									Continuar
								</Link>
							</button>
						</div>

						<p className="NoCurpText">
							Si no conoces tu CURP{" "}
							<a
								className="ConsultaAqui"
								href="#"
							>
								consulta aquí
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default InfoModal;
