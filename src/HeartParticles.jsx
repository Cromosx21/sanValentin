import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

export default function HeartParticles() {
	const [hearts, setHearts] = useState([]);

	useEffect(() => {
		const generateHearts = () => {
			const newHearts = Array.from({ length: 20 }).map(() => ({
				id: uuidv4(),
				x: Math.random() * window.innerWidth, // Posición horizontal aleatoria
				y: Math.random() * window.innerHeight, // Posición vertical aleatoria
				size: Math.random() * 40 + 10, // Tamaño aleatorio entre 10px y 50px
				duration: Math.random() * 4 + 2, // Duración de animación entre 2s y 6s
			}));
			setHearts(newHearts);
		};

		generateHearts();
		const interval = setInterval(generateHearts, 4000); // Generar nuevos corazones cada 4s
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
			{hearts.map((heart) => (
				<motion.div
					key={heart.id}
					initial={{ opacity: 0, y: heart.y, x: heart.x, scale: 0.5 }}
					animate={{
						opacity: [0, 1, 0], // Aparece y desaparece suavemente
						y: [heart.y, heart.y - 200], // Se mueve hacia arriba
						x: [heart.x, heart.x + (Math.random() * 200 - 100)], // Movimiento lateral aleatorio
						scale: [0.5, 1, 0.5], // Crece y se reduce
					}}
					transition={{
						duration: heart.duration,
						ease: "easeInOut",
						repeat: Infinity, // Repite la animación
					}}
					className="absolute text-rose-500"
					style={{ fontSize: `${heart.size}px` }}
				>
					❤️
				</motion.div>
			))}
		</div>
	);
}
