import React, { useState } from 'react'

const AddUser = () => {
    const intialFormvalue = {
        name: "",
        phone:"",
       email: "",       
      };
      const [userinfo, setUserInfo] = useState(intialFormvalue);
      const [userList, setUserList] = useState([]);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userinfo, [name]: value });
        
      };

console.log(userinfo)
      const handleSubmit = (e) => {
        e.preventDefault();
        const { name,email,mobNO} = userinfo;
        const user = {
          name,
          mobNO,
          email
        };
        setUserList([...userList, userinfo]);
        setUserInfo(intialFormvalue);
        // axios.post("http://localhost:3001/Users", user).then((res) => {
        //   console.log(res.data);
        // });
        // navigate("/list")
        console.log(userList)
      };


  return (
    <div>




<section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <input
              type="text"
              className="form-control"
              value={userinfo.name}
              onChange={handleChange}
              name="name"
              placeholder="Name"
            />
                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <input
              type="text"
              className="form-control"
              value={userinfo.email}
              onChange={handleChange}
              name="email"
              placeholder="email"
            />
                      <label className="form-label" htmlFor="form3Example3c" >Your Email</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <input
              type="text"
              className="form-control"
              value={userinfo.mobNo}
              onChange={handleChange}
              name="mobNo"
              placeholder="Number"
            />
                    
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                   
                  </div>
                  
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">ADD User</button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
              </div>
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

export default AddUser