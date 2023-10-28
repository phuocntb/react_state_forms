import Navbar from './components/Navbar'
import ProductTable from './components/products/ProductTable'
import CountNumber from './components/count-numbers/CountNumber'
import UseStateCom from './components/use_states/UseStateCom'
import RegisterForm from './components/forms/RegisterForm'
//state 
/*
  State: Trạng Thái
*/
function App() {
  let products = [
    {
      id: 1,
      name: "SP 1",
      price: 50000
    },
    {
      id: 2,
      name: "SP 2",
      price: 50000
    },
    {
      id: 3,
      name: "SP 3",
      price: 50000
    }
  ]

  return (
    <>
      {/* <Navbar/>
      <div style={{
        width: "500px"
      }}>
       <ProductTable products={products}/>
      </div>
      -----------------
      <CountNumber />
      -----------------
      <UseStateCom></UseStateCom> */}
      <RegisterForm/>
    </>
  )
}

export default App
