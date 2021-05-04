import React from 'react'
import makeStyles  from '@material-ui/styles/makeStyles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Typography from '@material-ui/core/Typography'
import { connect,useDispatch,useSelector } from 'react-redux'
import { increment, decrement } from '../store/actions/testActions'
import { bindActionCreators } from 'redux'
// import { INCREMENT } from '../src/constants'
import {wrapper} from '../store'


const Index = (
//   value,action,from,increment,decrement
) => {
  const dispatch = useDispatch();
  const {value,action,from} = useSelector(state => state.test)
  const add = () =>{

      dispatch(increment())
  }
  const dec = () =>{
    dispatch(decrement())
}
//   dispatch(increment(),decrement())

  return (
     <>
      <p>Dispatched from <b>{from}</b></p>
      <h3>{value}</h3>
      <h3>{action}</h3>
      <button onClick={() => add()}>add</button>
      <button onClick={() => dec()}>dec</button>
      </>
    
  
  )
}

// Index.getInitialProps = ({ store }) => {
//   store.dispatch({
//     type: "INCREMENT",
//     from: 'server'
//   })

//   return {}
// }
export const getStaticProps = wrapper.getStaticProps(store => ()=> {
  store.dispatch({
        type: "INCREMENT",
        from: 'server',
        

      })
      return {}
// console.log(store)
}) 
const mapDispatchToProps = {
  increment,
  decrement
}

// export default connect(
//   state => state,
//   mapDispatchToProps
// )(Index)

export default Index
