import Input from "../../components/forms/input";
import Router from 'next/router';
import { useState } from "react";

 const handleAddSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

	// Get data from the form.
    const data = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      code: event.target.code.value,
      role: event.target.role.value
    }

    // Endpoint API
   	const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/user/add`;
    const JSONdata = JSON.stringify(data)

    // Form the request for sending data to the server.
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
	 
	return Router.push('/admin/user')   
};
 const handleUpdateSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

	// Get data from the form.
    const data = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      code: event.target.code.value,
      role: event.target.role.value
    }

    // Element need for endpoint API
   	const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/user/${event.target._id.value}`;
    const JSONdata = JSON.stringify(data)

    // Form the request for sending data to the server.
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
	 
	return Router.push('/admin/user')   
};

export default function FormUser({action,data}){

	  return (
  <>
    <form  className="bg-slate-50 p-5 flex flex-col flex-wrap" onSubmit= {(action == "add")? handleAddSubmit : handleUpdateSubmit }>
   		<Input inputType="text" label="Nom" name="lastname" dataInput={(data.user)? data.user.lastname: ''}/>
   		<Input inputType="text" label="Prénom" name="firstname" dataInput={(data.user)? data.user.firstname: ''}/>
   		<Input inputType="email" label="Mail" name="email" dataInput={(data.user)? data.user.email: ''}/>
   		<Input inputType="text" label="Code" name="code" dataInput={(data.user)? data.user.code: ''}/>
   		<div className="flex flex-row flex-wrap mb-3">
   		 <input type="radio" className="rounded-lg p-2" name="role" value="employe"/><span className="px-3 text-lg">employé</span>
   		 <input type="radio" className="rounded-lg p-2" name="role" value="admin"/><span className="px-3 text-lg">administrateur</span>
   		 </div>
   		 <input type="hidden" name="_id" value={(data.user)?  data.user._id : ''}/>
   		  
      <button type="submit" className="bg-blue-500 text-white p-3 my-3">
        {(action == "add")? "Ajouter" : "Modifier" }
      </button>
     </form>
 </>
  ); 
