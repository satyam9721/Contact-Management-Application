import React, { useEffect, useState } from 'react'
import axios from "axios"
const UserList = () => {
    const [userList,setUserList]= useState()
useEffect(() => {

    const fetchUser = ()=>{
const res = axios.get("http://localhost:8000/api/contacts")

setUserList(res.data)
console.log(userList)
    }
    fetchUser()
      }, []);

  return (
   
    <div><section className="vh-100" style={{backgroundColor: '#9de2ff'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-md-9 col-lg-7 col-xl-5">
        <div className="card" style={{borderRadius: 15}}>
          <div className="card-body p-4">
            <div className="d-flex text-black">
            {
                userList.map((user)=>{

                    return( <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">Danny McLoan</h5>
                    <p className="mb-2 pb-1" style={{color: '#2b2a2a'}}>{user.name}</p>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2" style={{backgroundColor: '#efefef'}}>
                      <div>
                        <p className="small text-muted mb-1">Articles</p>
                        <p className="mb-0">41</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">976</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <button type="button" className="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                      <button type="button" className="btn btn-primary flex-grow-1">Follow</button>
                    </div>
                  </div>)
                })
            }
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default UserList