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

export default function showUser({data}){
return (
	<>
	<div className="bg-slate-50 flex flex-col mx-5 px-5 rounded-lg">
 <p className="font-bold text-md lg:text-lg">Utilisateur N° {data.user._id}</p>
 <p className="text-md lg:text-lg">Nom {data.user.lastname}</p>
 <p className="text-md lg:text-lg">Prénom {data.user.firstname}</p>
  <p className="text-md lg:text-lg">email {data.user.email}</p>
 <p className="text-md lg:text-lg">code {data.user.code}</p>
 <p className="text-md lg:text-lg">role {data.user.role}</p>

	</div>
	</>
	);
}