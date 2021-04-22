import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/products.module.css';
import { twoDecimal } from '../../utils/format';
import { API_URL,fromImageToUrl } from '../../utils/url';

const Product = ({ product }) => {
console.log(product)
  return (
    <div>
      <Head>
        <title>Product</title>
      </Head>
      <Link href='/products'>Go Back</Link>
      <div key={product.name} className={''}>
        <h2>{product.name}</h2>
        <img src={product.image.url} alt={product.name} className={`${styles.fullImg} ml-2`} />
        <h3>{product.name}</h3>
        <p>Price: ${twoDecimal(product.price)}</p>
        <p>{product.published_at}</p>
        <p>
          {product.content} <br /> {product.meta_description} <br />{' '}
          {product.meta_title}
        </p>
      </div>
    </div>
  );
};

export default Product;

export async function getStaticProps({ params: { slug } }) {
  
  const res = await fetch(`${API_URL}/products/?slug=${slug}`);
  let found = await res.json();
  found = found.find(product => product.slug === slug)
  // console.log("props" + found[1].name + found[0].name)
  return {
    props: {
      product: found,
    },
  };
}
export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/products/`);
  const products = await res.json();
  console.log("path :"+products)
  const product =Object.keys(products).length > 0 && products.map((product) => ({
    params: { slug: String(product.slug) },
  }));
    // console.log(product)
  return {
    paths: product,
    fallback: false,
  };
};
