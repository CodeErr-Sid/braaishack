import React, { useEffect, useState } from 'react'
import './List.css'
import { url, currency } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const List = () => {

  const { token } = useAuth()

  const [list, setList] = useState([]);



  // console.log(list)
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, 
      { id: foodId }, 
      { headers: { authorization: token } }
    );
    
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    }
    else {
      toast.error("Error")
      console.log(response.data)
    }
  }

  useEffect(() => {
    const fetchList = async () => {
      const response = await axios.get(`${url}/api/food/list`)
      if (response.data.success) {
        setList(response.data.data);
      }
      else {
        toast.error("Error")
      }
    }

    fetchList()
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p className='cursor' onClick={() => removeFood(item._id)}>x</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
