import { Button } from 'reactstrap'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'


function App() {

  const popup = () => {
    toast.info("This is react first pop up box.",{position:"top-center",autoClose:9000,closeOnClick:false,theme:"colored"});
  }
  return (
    <>
      <ToastContainer />
      <h1>Shree Ganeshay Namah:</h1>
      <Button color="warning" outline onClick={popup}>This is First Button.</Button>
    </>
  )
}

export default App
