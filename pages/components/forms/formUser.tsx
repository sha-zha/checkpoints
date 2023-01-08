import Input from "../../components/forms/input";

export default function FormUser(){
	
	  return (
    <div className="bg-slate-50 p-5 flex flex-col flex-wrap">
   		<Input inputType="text" label="Nom"/>
   		<Input inputType="text" label="Prénom"/>
   		<Input inputType="email" label="Mail"/>
   		<Input inputType="text" label="Code"/>
   		<div className="flex flex-row flex-wrap mb-3">
   		 <input type="checkbox" className="rounded-lg p-2"/><span className="px-3 text-lg">employé</span>
   		 <input type="checkbox" className="rounded-lg p-2"/><span className="px-3 text-lg">administrateur</span>
   		 </div>
   		  
      <button className="bg-blue-500 text-white p-3 my-3">
        Ajouter
      </button>
    </div>
  ); 
}