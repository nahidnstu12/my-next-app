import { useRouter } from "next/router"

const person = () => {
   const {query} = useRouter()
    console.log(query)
   return <h2>{query.person}'s {query.vehicle}  { query.query1}</h2>
}

export default person
