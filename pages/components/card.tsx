export default function Card(){
	return (
		<>
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
			<div className="flex flex-col flex-wrap bg-white w-auto mx-5 p-2 rounded-r-xl border-violet-400 border-l-4">
				<div className="flex flex-row flex-wrap">
					<span>Nom</span>
					<span className="px-5">Prénom</span>
				</div>
				
				<div className="flex flex-col flex-wrap">
					<p>entré à <strong>9h</strong> sorti à <strong>9h30</strong></p>
					<p>nombre d'heure travaillé : <strong>0</strong></p>
				</div>
			</div>

			
		</div>
		</>
	)
}