import {products} from '../../data/product'

export default (req, res) => {
    // get all products
    res.status(200).json( products )
  }
  