import { useState } from "react";
import Question from "./Question";
import Modal from "./Modal";

export default function App() {
	const [answers, setAnswers] = useState({ });
	const [showModal, setShowModal] = useState(false);
	const [errors, setErrors] = useState({ });
	
	const handleChange = (event) => {
		setAnswers({ ...answers, [event.target.name]: event.target.value });
		setErrors({ ...errors, [event.target.name]: false });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newErrors = {};
		const requiredQuestions = ["pregunta1", "pregunta2", "pregunta3"];

		requiredQuestions.forEach((q) => {
		if (!answers[q] || answers[q] === "") {
			newErrors[q] = true;
		}
		});

		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
		setShowModal(true);
		console.log("mostrar modal");
		} else {
		console.log("Errores detectados: ", newErrors);
		
		}
	};



	return (
		<>
			<section className=" w-full h-full bg-cover bg-center bg-no-repeat bg-rose-200 bg-[url(./assets/background.png)] relative">
				<div className="max-w-3xl mx-auto px-6 py-12 flex flex-col items-center justify-center gap-6">
					<h1 className="text-3xl font-vibes text-gray-800">
						¡Hola Liz!
					</h1>
					<h2 className="text-4xl font-vibes text-rose-900 text-center">
						¡Bienvenido al juego de San Valentín!
					</h2>
					<form className="flex flex-col gap-6 font-Quicksand items-center" onSubmit={handleSubmit}>
						<Question
							title="¿Si tuvieras que elegir un plan para San Valentín, ¿Cuál sería?"
							name="pregunta1"
							q1="Pollito y luego ir al cine."
							q2="Salir a un lugar bonito y comer algo rico."
							q3="Dormir todo el día y evitar el 14 de febrero."
							onChange={handleChange}
							error={errors.pregunta1}
						/>
						<Question
							title="¿Si tuvieras que elegir un regalo sorpresa, ¿Cuál preferirías recibir?"
							name="pregunta2"
							q1="Chocolates, por que el chocolate es vida."
							q2="Algo echo a mano, tipo una carta."
							q3="Un hermoso ramo de flores."
							onChange={handleChange}
							error={errors.pregunta2}
						/>
						<Question
							title="¿Si tuvieras que elegir un súper poder para esta fecha, ¿Cuál sería?"
							name="pregunta3"
							q1="Leer la mente para saber si le gusto a alguien."
							q2="Pausar el tiempo y dormir 12 horas más."
							q3="Teletransportarme a un lugar romántico sin pagar pasajes."
							onChange={handleChange}
							error={errors.pregunta3}
						/>
						<button
							type="submit"
							className="bg-rose-600 text-rose-50 px-8 py-3 rounded-lg font-Quicksand font-bold text-xl active:bg-rose-500 active:shadow-2xl active:-translate-y-1 hover:bg-rose-500 hover:shadow-lg hover:-translate-y-0.5 transition-all"
						>
							Enviar respuestas
						</button>
					</form>
				</div>
				{showModal && <Modal />}
			</section>
		</>
	);
}