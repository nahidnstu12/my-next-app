import {products} from '../../data/product'
import { authenticated } from '../../utils/authenticated';

export default authenticated((req, res) => {
    // get all products
    res.status(200).json( products )
  })
  