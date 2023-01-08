"use client";
import Link from 'next/link';
import Router from 'next/router';

async function deleteElement(id, refresh) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/delete/${id}`, {
    method: "POST",
  });

	return Router.push('/admin/user')   
}

export default function Card({user,linkUrl,labelLink}){

	return (
		<>
		<div >
			<div className="flex flex-col flex-wrap bg-white w-auto mx-5 p-2 rounded-r-xl border-violet-400 border-l-4">
				<div className="flex flex-row flex-wrap">
					<span>{user.lastname}</span>
					<span className="px-5">{user.firstname}</span>
					<span className="px-5">{user.email}</span>
				</div>
				
				<div className="flex flex-col flex-wrap">
					<p>entré à <strong>{user.start? user.start: '--'}</strong> sorti à <strong>{user.end? user.end: '--'}</strong></p>
					<p>nombre d'heure travaillé : <strong>{user.total? user.total: '--'}</strong></p>
					<Link className="text-violet-500 text-lg" href={linkUrl}>{labelLink}</Link>
					<button className="text-red-500 text-lg" onClick={() => deleteElement(user._id)}>Supprimer</button>
				
				</div>
			</div>
		</div>
		</>
	)
}