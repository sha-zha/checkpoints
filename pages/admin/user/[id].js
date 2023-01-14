import FormUser from '../../components/forms/formUser';
import { useRouter } from 'next/router'

export async function getStaticProps({params}){

	if(params){
 		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${params.id}`)
		const data = await res.json();	

	
		return {
			props: {
				data
			}
		}
	}
}

export async function getStaticPaths() {
	

	const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`);
	const allUser = await users.json();

  return {
    paths: allUser.user.map(user => ({
    	params : {_id : user._id.toString() }
    })),
    fallback: false,
     
  }
  
}

export default function editUser({data}){
	
return (
	<>
	<FormUser action="edit" data={data}/>
	</>
	);
}