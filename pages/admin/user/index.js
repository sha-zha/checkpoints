import Card from '../../components/card';
import Link from 'next/link';

export async function getStaticProps() {
 
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`)
const data = await res.json()

  return {
    props: {
      data
    }
  }
  
}

export default  function UserList({data}) {

        return (
    <div>
      <main>
      <div className="flex flex-row mx-5">
       <Link href="/admin/user/add" className="bg-slate-50 p-4 rounded-md">ajouter un utilisateur</Link>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
        {data.users.map((user) => {

          return (
            <li key={user._id} className="py-3 px-0">
                <Card user={user} linkUrl={`/admin/user/${user._id}`} labelLink="Editer" seeUrl={`/admin/user/edit/${user._id}`} labelSee="Voir plus"/>
            </li>
          );
          
        })}
        </ul>

      </main>
    </div>
  );
    
}