import Head from 'next/head'
import Link from 'next/link'

const About = () =>{
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <h3>This is Info page</h3>
            <Link href="/persons">Persons Lists</Link>
            <br/>
            <Link href="/vehicles">Vehicles Lists</Link>
        </div>
    )
}
export default About
