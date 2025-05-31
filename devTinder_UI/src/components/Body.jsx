
import Navbar from '../components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/slices/userSlice'

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  const fetchUserData = async () =>{
    try {
      const res = await axios.get(baseUrl+"/profile", {withCredentials:true})
      dispatch(addUser(res.data.user))
      
    } catch (error) {
      if(error.status===401){
        navigate('/login')
      }
      console.error("Something went wrong: ", error); 
    }
  }

  useEffect(()=>{
    fetchUserData()
  },[])

  if(!user){
    return <div className='flex items-center h-screen justify-center font-bold text-3xl'>
      Loading....
    </div>
  }


  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Body