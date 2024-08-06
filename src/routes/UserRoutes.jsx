import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserList from '../component/UserList'
import AddUser from '../component/AddUser'
import EditUser from '../component/EditUser'



function UserRoutes() {
  return (
    <Routes>
        <Route path="" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
    </Routes>
  )
}

export default UserRoutes