import { myGet } from "../utils/myGet"

export default function Vehicles({Vehicles}) {
    return (
        <div>
            Vehicles list {JSON.stringify(Vehicles)}
        </div>
    )
}

Vehicles.getInitialProps = async (ctx) =>{
    // const router = useRouter()
   const json = await myGet("http://localhost:3000/api/vehicles",ctx)
   return {Vehicles:json}
}

