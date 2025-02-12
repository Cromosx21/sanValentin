import MiOsito from "./assets/Osito-4-unscreen.gif";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeartParticles from "./HeartParticles";


export default function Pregunta({setAnswers}) {

    const navigate = useNavigate();

    
    const message = [
        "Mmm... Necesito pensarlo 🙄",
        "Hubo un error, el botón dejó de funcionar 😅",
        "Efectivamente no funciona este botón 😐",
        "¿Por qué lo sigues presionando? 😑",
        "Ya deja de presionar este botón, por favor 🙁",
        "Bloquearé el botón si lo vuelves a hacer 🤨",
        "Botón bloqueado 😛"

    ]
    const [step, setStep] = useState(0);


    const handleTextChange = () => { 
        if(step < message.length - 1){
            setStep(step + 1);
        }
        
    };

	const handleAccept = () => {
		setAnswers((prev) => ({ ...prev, decision: "Acepto la cita 💖" }));
		navigate("/success");
	};


    return (
		<section className="w-full h-screen bg-cover bg-center bg-no-repeat bg-rose-200 bg-[url(./assets/background.png)] relative text-center flex items-center justify-center px-6">
			<HeartParticles />
			<div className="flex flex-col gap-6">
				<h2 className="font-vibes text-4xl text-rose-700">
					¿Quieres ser mi San Valentín este 14?
				</h2>
				<img
					src={MiOsito}
					alt="Osito Gift"
					className="max-w-md mx-auto w-full aspect-square"
				/>
				<div className="flex flex-col gap-4 items-center justify-evenly">
					<button
						className="border-2 border-rose-600 rounded-lg px-8 py-3 font-Quicksand font-bold bg-[#FFF1F250] active:shadow-2xl active:-translate-y-1 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
						onClick={handleTextChange}
						disabled={step === message.length - 1}
					>
						{message[step]}
					</button>
					<button
						className="bg-rose-600 text-rose-50 px-8 py-3 rounded-lg font-Quicksand font-bold text-xl active:bg-rose-500 active:shadow-2xl active:-translate-y-1 hover:bg-rose-500 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
						onClick={handleAccept}
					>
						¡Sí, obvio! 🥰"
					</button>
				</div>
			</div>
		</section>
	);
}
