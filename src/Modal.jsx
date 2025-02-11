import { useNavigate } from "react-router-dom";
import Osito1 from "./assets/Osito-2-unscreen.gif";

export default function Modal() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/pregunta");
	};

    return (
		<div className="w-full h-screen bg-[#02020230] fixed top-0 left-0 flex flex-col items-center justify-center px-6">
			<div className="bg-rose-200 py-8 px-12 rounded-lg text-center flex flex-col gap-4 max-w-xl shadow-2xl">
				<h2 className="text-5xl font-vibes text-rose-700">
					¡Felicidades!
				</h2>
				<p className="text-lg font-Quicksand">
					Ahora ya se un poco más sobre tu lado romántico Pero falta
					la pregunta más importante...
				</p>
				<img src={Osito1} alt="Osito gif" className="max-w-sm w-full mx-auto" />
				<button
					onClick={handleClick}
					className="bg-rose-600 text-rose-50 px-6 py-3 rounded-lg block font-Quicksand font-bold text-xl hover:bg-rose-500 transition-all"
				>
					¿Cuál es la pregunta?
				</button>
			</div>
		</div>
	);
}