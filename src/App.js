import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import User_login from './Components/user/User_login';
import Nav_bar from './Components/Navbar/Nav_bar';
import {Route,Routes} from'react-router-dom'
import Req_membership from './Components/user/Req_membership';
import Create_account from './Components/Create_account';
import Usermain from './Components/user/Usermain';
import Admin_main from './Components/Admin/Admin_main';
import Addbooks from './Components/Admin/Addbooks';
import Viewbooks from './Components/Admin/Viewbooks';
import Updatebook from './Components/Admin/Updatebook';
import Submain from './Components/Subadmin/Submain';
import Book_arrangment from './Components/Subadmin/Book_arrangment';
import Submembership from './Components/Subadmin/Submembership';
import Request from './Components/Admin/Request';
import User_request from './Components/Subadmin/User_request';
import Arrange from './Components/Subadmin/Arrange';
import Searchbooks from './Components/user/Searchbooks';
import Takebook from './Components/user/Takebook';
import Feedback from './Components/user/Feedback';
import Userfeedback from './Components/Subadmin/Userfeedback';
function App() {
  return (
    <div>
    {/* <Nav_bar/> */}
    <Routes>
      <Route path="/" element={<User_login/>}></Route>
    </Routes>
    <Routes>
      <Route path="/create_account" element={<Create_account/>}></Route>
    </Routes> 
    <Routes>
      <Route path="/take_membership" element={<Req_membership/>}></Route>
    </Routes> 
    <Routes>
      <Route path="/subadmin_membership" element={<Submembership/>}></Route>
    </Routes> 

    <Routes>
      <Route path="/viewrequests" element={<Request/>}></Route>
    </Routes> 

    <Routes>
      <Route path="/usersrequest" element={<User_request/>}></Route>
    </Routes> 
    
    
    <Routes>
      <Route path="/user" element={<Usermain/>}></Route>
    </Routes> 
    <Routes>
      <Route path="/admin" element={<Admin_main/>}></Route>
    </Routes>
    <Routes>
      <Route path="/subadmin" element={<Submain/>}></Route>
    </Routes>
    <Routes>
      <Route path="/add_books" element={<Addbooks/>}></Route>
    </Routes> 
    <Routes>
    <Route path="/book_details" element={<Viewbooks/>}></Route>
    </Routes> 
    <Routes>
    <Route path="/updatebooks" element={<Updatebook/>}></Route>
    </Routes> 
    
    <Routes>
    <Route path="/bookarrangement" element={<Arrange/>}></Route>
    </Routes> 

    
    {/* useparms used below routes */}
    <Routes>
    <Route path="/arrangebook/:id/:stock" element={<Book_arrangment/>}></Route>
    </Routes> 
{/* //////////////////////////////////////////// */}

    <Routes>
    <Route path="/searchbook" element={<Searchbooks/>}></Route>
    </Routes> 

    <Routes>
    <Route path="/takebook/:id" element={<Takebook/>}></Route>
    </Routes> 

    <Routes>
    <Route path="/postfeedback" element={<Feedback/>}></Route>
    </Routes> 

    <Routes>
    <Route path="/userfeedbacks" element={<Userfeedback/>}></Route>
    </Routes> 
    {/* <Routes>
    <Route path="/postfeedback" element={<Feedback/>}></Route>
    </Routes>  */}
    {/* <Routes>
    <Route path="/postfeedback" element={<Feedback/>}></Route>
    </Routes>  */}
    
    </div>
  )
}

export default App
