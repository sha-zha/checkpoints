export default function Input({inputType,label}){
	return(
		<>
<label className="font-bold text-lg">{label}</label>
    <input type={inputType} className="rounded-lg p-2 mb-3"/>
  </>
	)
}