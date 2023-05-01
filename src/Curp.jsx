import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SlideCard from "./SlideCard/SlideCard";
import axios from "axios";

import "./css/Curp.css";

import checkImg from "./assets/img_gcheckmark.svg";
import cancelImg from "./assets/ico_cancel.svg";
import parejaImg from "./assets/img_pareja.svg";
import SlideCardText from "./SlideCard/SlideCardText";
import { useLocation } from "react-router-dom";

const Curp = () => {
	let location = useLocation();
	let { from: curp } = location.state[0];
	let [citName, setCitName] = useState("");
	let [citCurp, setCitCurp] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3000/citizen/" + curp).then((data) => {
			setCitName((name) => data.data[0].name);
			setCitCurp((curp) => data.data[0].curp);
		});

		// axios
		// 	.post(
		// 		"http://localhost:3000/citizen/",
		// 		{
		// 			name: "MARTHA ALICIA CARMONA SOLIS",
		// 			curp: "XEXX010101MNEXXXA8",
		// 		},
		// 		{
		// 			headers: {
		// 				"Content-Type": "application/json",
		// 			},
		// 		}
		// 	)
		// 	.then((data) => {
		// 		console.log(data);
		// 	});
	}, []);

	return (
		<>
			<Header></Header>
			<div style={{ height: "80px" }}></div>
			<div className="InfoContainer2">
				<div className="RegistroConcluidoContainer">
					<div className="RegistroConcluidoLeft">
						<img
							src={checkImg}
							width={48}
							style={{ marginRight: "2%" }}
						></img>
						<h1>Registro Concluido</h1>
					</div>
					<div className="RegistroConcluidoRight">
						<div className="CancelarCitaButton">
							<img
								src={cancelImg}
								style={{ paddingRight: "15px" }}
							></img>
							<span>Quiero cancelar mi cita</span>
						</div>
					</div>
				</div>
				<div className="CurpWindow">
					<div
						style={{
							fontWeight: "bold",
							display: "flex",
							alignItems: "end",
							verticalAlign: "middle",
							flexGrow: "1",
						}}
					>
						<span
							style={{
								fontWeight: "normal",
								alignSelf: "center",
								paddingBottom: "8px",
								paddingRight: "3px",
							}}
						>
							CURP:
						</span>
						<div>
							<span>{curp.toUpperCase()}</span>
							<br></br>
							<span>{citName.toUpperCase()}</span>
						</div>
						<br></br>
						<span></span>
					</div>
					<div className="TargetCard">
						<div>
							<img
								src={parejaImg}
								width="64px"
								style={{ marginRight: "5px" }}
							></img>
						</div>
						<div>
							<SlideCardText
								group={{
									target: "Personas de 18 y más",
									dosis: 2,
									vacuna: 2,
									location: "Zapopan",
								}}
							></SlideCardText>
						</div>
					</div>
				</div>
				<br></br>
				<br></br>

				<div className="CurpWindow TimeDate">
					<div>
						<p>Módulo</p>
						<span>Auditorio Benito Juárez</span>
					</div>
					<div>
						<p>Dirección</p>
						<span>Av. Mariano Barcenas s/n</span>
						<br></br>
						<span>Col. Auditorio, 45910</span>
						<br></br>
						<span>Zapopan, Jalisco</span>
					</div>
					<div>
						<p>Fecha y Hora:</p>
						<div className="DateLabel">
							Lunes 11 de Octubre 7:30 am
						</div>
					</div>
				</div>
				<div>
					<p style={{ fontWeight: "bold" }}>
						Ya tienes asegurado el lugar y hora para tu vacunación,
						ahora, para asegurar tu dosis es muy importante que
						también te registres en<br></br> la plataforma federal.
						Ingresa a{" "}
						<a href="https://mivacuna.salud.gob.mx/">
							https://mivacuna.salud.gob.mx/
						</a>{" "}
						para obtener tu expediente de vacunación.<br></br>
						Recomendaciones para el día de tu vacunación:
					</p>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Curp;
