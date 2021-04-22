import { myGet } from "../utils/myGet"

export default function Persons({persons}) {
    return (
        <div>
            persons list {JSON.stringify(persons)}
        </div>
    )
}

Persons.getInitialProps = async (ctx) =>{
    // const router = useRouter()
   const json = await myGet("http://localhost:3000/api/persons",ctx)
   return {persons:json}
}

