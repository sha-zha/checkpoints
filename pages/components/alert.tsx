export default function Alert(data){
	const sucess = "bg-green-400 text-md md:text-lg text-white";
	const error =  "bg-red-400 text-md md:text-lg text-white";

	return (
		<div className={(data.sucess)? sucess : error }>
			<p>{data.message}</p>
		</div>
	)
}