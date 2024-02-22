import React,{useState,useEffect} from 'react';
import axios from 'axios';

import FoodItemCard from '../../components/FoodItemCard/FoodItemCard';
import Navbar from '../../components/Navbar/Navbar';

import { currentUser } from '../../util/currentUser';
import { loginRequired } from '../../util/loginRequired';
import './Home.css';

function Home() {

  const [searchText,setSearchText] =  useState('')
  const [currentFoodItems,setAllFooditems] = useState([])

  async function fetchAllItem(){
    const response = await axios.get('/allFoodItems')
    console.log(response.data.data)
    setAllFooditems(response.data.data)
  }

  async function fetchSpecificItems(){
    const response = await axios.get(`/foodItemsbytitle?title=${searchText}`)
    console.log(response.data.data)
    setAllFooditems(response.data.data)
  }

  useEffect(()=>{
    if(searchText.length > 0){
      fetchSpecificItems()
    }
    else
    {
      fetchAllItem()
    }

  },[searchText])


  function LogOut(){
    localStorage.removeItem('currentUser');
    window.location.href = "/login"
  }

  useEffect(() => {
    loginRequired()
  }, [])

  return (
    <div className='overflow-hidden'>
    <Navbar user={currentUser?.name} />

    <div className="search-container">
      <input type="text" placeholder='Type to search your favourite food item' 
      className='input-search' value={searchText}
      onChange={(e)=> setSearchText(e.target.value)} />
    </div>

    <div className="food-Iems-result">
      <div className='row '>
      {
        currentFoodItems?.map((foodItem)=>{
          return (<div key={foodItem.imgUrl}><FoodItemCard 
            category={foodItem.category} 
            title={foodItem.title} 
            description={foodItem.description} 
            imgUrl={foodItem.imgUrl} 
            price={foodItem.price} /></div> )
        })
      }
      </div>
    </div>

    <button type="button" className="btn btn-primary" onClick={LogOut}>Logout</button>
    </div>
  )
}

export default Home