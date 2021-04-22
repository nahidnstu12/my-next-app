import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/products.module.css';
import {twoDecimal} from "../utils/format";
import { myGet } from '../utils/myGet';
import {API_URL, fromImageToUrl} from "../utils/url"

const product = ({products}) => {
   
  return (
    <div>
      <Head>
        <title>Products List</title>
      </Head>
      {Object.keys(products).length > 0 && products.map((product) => (
        <Link href={`/product/${product.slug}`} key={product.name}>
          <a>
            <div  className={styles.product_rows}>
              <img
                src={fromImageToUrl(product.image)}
                alt={product.name}
                className={`${styles.img} ml-2`}
              />

              <h3>
                {' '}
                {product.name} - ${twoDecimal(product.price)}
              </h3>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default product;

product.getInitialProps = async (ctx) => {
  const json = await myGet(`${API_URL}/products`,ctx)
  return {products:json}
}
// export const getStaticProps = async(ctx) => {
//   // const json = await myGet(`${API_URL}/products`,ctx)
//   // return {products:json}
//     const resp = await fetch(`${API_URL}/products`)
//     const products = await resp.json()

//     // if(resp.status === 401 && ctx.req){
//     //   ctx.res.writeHead(302,{
//     //     Location: 'http://localhost:3000/login'
//     //   })
//     //   ctx.res.end()
//     //   return;
//     // }
//     return {
//         props:{
//             products
//         }
//     }
// }