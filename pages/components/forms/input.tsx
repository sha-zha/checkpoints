import {React,  useState} from 'react';

export default function Input({inputType,label,name, dataInput}){

let [value, setValue] = useState(dataInput);
	return(
		<>

<label className="font-bold text-lg">{label}</label>
    <input type={inputType} className="rounded-lg p-2 mb-3" name={name} value={value} onChange={ (e) => { setValue(e.target.value)}}/>
  </>
	)
}