import MiOsito from "./assets/Osito-4-unscreen.gif";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pregunta() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/success");
    }
    
    const message = [
        "Mmm... Necesito pensarlo",
        "Hubo un error, el botón dejó de funcionar",
        "Efectivamente no funciona este botón",
        "¿Por qué lo sigues presionando?",
        "Ya deja de presionar este botón, por favor",
        "Bloquearé el botón si lo vuelves a hacer",
        "Botón bloqueado"

    ]
    const [step, setStep] = useState(0);


    const handleTextChange = () => { 
        if(step < message.length - 1){
            setStep(step + 1);
        }
        
    };


    return (
		<section className="w-full h-screen bg-cover bg-center bg-no-repeat bg-rose-200 bg-[url(./assets/background.png)] relative text-center flex items-center justify-center px-6">
			<div className="flex flex-col gap-6">
				<h2 className="font-vibes text-4xl text-rose-700">
					¿Quieres ser mi San Valentín este 14?
				</h2>
				<img
					src={MiOsito}
					alt="Osito Gift"
					className="max-w-md mx-auto w-full"
				/>
				<div className="flex flex-col gap-4 items-center justify-evenly">
					<button
						className="border-2 border-rose-600 rounded-lg px-8 py-3 font-Quicksand font-bold bg-[#FFF1F250]"
						onClick={handleTextChange}
						disabled={step === message.length - 1}
					>
						{message[step]}
					</button>
					<button className="border-2 border-rose-600 rounded-lg px-8 py-3 font-Quicksand font-bold bg-rose-600 text-rose-50" onClick={handleClick}>
						¡Sí, obvio!
					</button>
				</div>
			</div>
		</section>
	);
}
