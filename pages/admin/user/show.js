export async function getStaticProps() {
 
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`)
const data = await res.json()

  return {
    props: {
      data,
    }
  }
  
}

export default function showUser(){
return (
	<>
	<div className="bg-slate-50 flex flex-col">

	</div>
	</>
	);
}