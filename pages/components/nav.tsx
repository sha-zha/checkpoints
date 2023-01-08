import Link from 'next/link';

export default function Nav() {
	return (
    <div className="h-full bg-blue-500 py-5 mb-4">
     <ul className="flex flex-row flex-wrap justify-around text-white">
      <li>
        <Link href="/">Accueil</Link>
      </li>
      <li>
        <Link href="/admin/user">utilisateurs</Link>
      </li>
    </ul>
    </div>
	)
}