export default function Question({ title, name, q1, q2, q3, onChange, error }) {
    return (
		<div className="max-w-xl mx-auto px-8 py-6 border-4 border-rose-400 rounded-lg flex flex-col gap-6 bg-[#FFE4E650] text-gray-800">
			<h3 className="font-bold text-xl text-center ">{title}</h3>
			<div className="flex flex-col gap-3 ">
				<div className="text-base flex flex-row gap-2 items-center">
					<input
						type="radio"
						name={name}
						id={`${name}1`}
						className="w-5 h-5"
						required
						onChange={onChange}
					/>
					<label htmlFor={`${name}1`}>{q1}</label>
				</div>
				<div className="text-base flex flex-row gap-2 items-center">
					<input
						type="radio"
						name={name}
						id={`${name}2`}
						className="w-5 h-5"
						required
						onChange={onChange}
					/>
					<label htmlFor={`${name}2`}>{q2}</label>
				</div>
				<div className="text-base flex flex-row gap-2 items-center">
					<input
						type="radio"
						name={name}
						id={`${name}3`}
						className="w-5 h-5"
						required
						onChange={onChange}
					/>
					<label htmlFor={`${name}3`}>{q3}</label>
				</div>
			</div>
		</div>
	);
}