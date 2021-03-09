import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/products.module.css';
import {twoDecimal} from "../utils/format";
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

export const getStaticProps = async() => {
    const res = await fetch(`${API_URL}/products`)
    const products = await res.json()

    // console.log("products " + products)

    return {
        props:{
            products
        }
    }
}