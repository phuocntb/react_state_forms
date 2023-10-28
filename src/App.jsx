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
  return (
    <>
      {/* <Navbar/> */}
      <div style={{
        width: "500px"
      }}>
       <ProductTable/>
      </div>
      {/* -----------------
      <CountNumber /> */}
      {/* -----------------
      <UseStateCom></UseStateCom> */}
      {/* <RegisterForm/>
      abadbasb */}
    </>
  )
}

export default App
