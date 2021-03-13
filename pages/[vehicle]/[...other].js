import { useRouter } from "next/router"

const other = () => {
   const {query} = useRouter()
    console.log((query))
   
   return <h2>{}'s {query.vehicle}  { query.query1} fav color: {}</h2>
}

export default other
