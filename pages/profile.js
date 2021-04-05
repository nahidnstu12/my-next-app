import Link from 'next/link';
// import {useRouter} from 'next/router'
const profileArr = [
  { v: 'Bike', name: 'Asik', color: "red" },
  { v: 'Car', name: 'Nahid', color: "Asmani" },
  { v: 'Boat', name: 'Forhad', color: "Light Blue" },
];

const profile = () => {
  // const router = useRouter()

  return (
    <div>
      {profileArr.map((p) => (
        // <Link href={`/${p.v}/${p.name}/${p.color}`} key={p.name}>

        <Link href={`/${p.v}/${p.name}`} key={p.name}>

        {/*  <Link href={`/${encodeURIComponent( p.v)}/${p.name}`} key={p.name}> */}

        {/*  <Link href={{ pathname: '/[vehicle]/[person]', query: {vehicle:p.v, person:p.name}}} key={p.name}> */}
        
          <a
            style={{
              display: 'block',
              pointer: 'cursor',
              color: 'blue',
              padding: '6px',
            }}
          >
            Navigate to {`${p.name}'s ${p.v}`}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default profile;
