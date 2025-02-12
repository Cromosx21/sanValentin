import OsitoFeliz from "./assets/Osito_1.gif";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import HeartParticles from "./HeartParticles";
import emailjs from "emailjs-com";

export default function Success({ answers = {} }) {
	const hasSentEmail = useRef(false);
	useEffect(() => {
		if (!hasSentEmail.current) {
			hasSentEmail.current = true;
			const templateParams = {
				to_name: "Liz",
				from_name: "Web San Valentín",
				pregunta1: answers.pregunta1 || "No respondida",
				pregunta2: answers.pregunta2 || "No respondida",
				pregunta3: answers.pregunta3 || "No respondida",
				decision: answers.decision || "No respondida",
				to_email: "mol13026@gmail.com"
			};
			emailjs
				.send("service_krmuvxa", "template_ul1vtsj", templateParams, "Ec9pdtM5NIuHGzeAG")
				.then((response) => {
					console.log("Email enviado", response.status, response.text);
				})
				.catch((error) => {
					console.log("Error al enviar el email", error);
				});
		};

	}, [answers]);

	useEffect(() => {
		confetti({
			particleCount: 200,
			spread: 120,
			startVelocity: 40,
			origin: { y: 0.6 },
			ticks: 200, // Duración más larga
		});
	}, []); // Se ejecuta solo una vez al montar el componente

	return (
		<section className="w-full h-screen bg-cover bg-center bg-no-repeat bg-rose-200 bg-[url(./assets/background.png)] relative text-center flex items-center justify-center px-6">
			<HeartParticles />
			<div className="flex flex-col gap-6 max-w-2xl">
				<h2 className="font-vibes text-5xl text-rose-700">
					¡Sabía que no me fallarías!
				</h2>
				<img src={OsitoFeliz} alt="Osito Gift" className="max-w-md mx-auto w-full rounded-2xl shadow-xl aspect-square" />
				<p className="font-Quicksand text-xl text-gray-900">
					Ahora oficialmente eres mi San Valentín y haré que sea un día especial. Prepárate para este 14.
				</p>
			</div>
		</section>
	);
}
