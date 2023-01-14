import FormUser from '../../components/forms/formUser';

const data = {user : false};

export default function addUser(){
return (
	<>
	<FormUser action="add" data={data}/>
	</>
	);
}