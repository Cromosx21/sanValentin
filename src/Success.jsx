import OsitoFeliz from "./assets/Osito_1.gif";

export default function Success() {
	
	return (
		<section className="w-full h-screen bg-cover bg-center bg-no-repeat bg-rose-200 bg-[url(./assets/background.png)] relative text-center flex items-center justify-center px-6">
			<div className="flex flex-col gap-6 max-w-2xl">
				<h2 className="font-vibes text-5xl text-rose-700">
					¡Sabía que no me fallarías!
				</h2>
				<img
					src={OsitoFeliz}
					alt="Osito Gift"
					className="max-w-md mx-auto w-full rounded-2xl shadow-xl"
				/>
                <p className="font-Quicksand text-lg text-gray-800">
                    Ahora oficialmente eres mi San Valentín y hare que sea un día especial. Prepárate para este 14
                </p>
            </div>
		</section>
	);
}
