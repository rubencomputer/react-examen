import "./css/Menu.css";
import Header from "./Header";
import Footer from "./Footer";
import InfoModal from "./InfoModal";

//imagenes
import imgLeft from "./assets/img_left.svg";
import imgPuntos from "./assets/img_back_puntos.svg";
import imgRight from "./assets/img_right.svg";
import imgTel from "./assets/ico_tel.svg";

function App() {
	return (
		<>
			<div className="Container">
				<Header></Header>

				<div className="InfoContainer">
					<div style={{ height: "80px" }}></div>
					<InfoModal></InfoModal>
					<div className="WhatsappButton">
						<img src={imgTel} style={{ marginRight: "5px" }}></img>
						<span>33 3823 3320</span>
					</div>
				</div>
				<div className="BeforeFooter"></div>
				<img
					src={imgLeft}
					style={{
						position: "absolute",
						height: "230px",
						left: "-60px",
						top: "248px",
					}}
				></img>
				<img
					src={imgPuntos}
					style={{
						position: "absolute",
						height: "70px",
						left: "404px",
						top: "665px",
					}}
				></img>
				<img
					src={imgRight}
					style={{
						position: "absolute",
						height: "200px",
						left: "1819px",
						top: "536px",
					}}
				></img>
				<Footer></Footer>
			</div>
		</>
	);
}

export default App;
