
import UserRoutes from "./routes/UserRoutes";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <>
         <h1>NAVBARR</h1>
          <Outlet />
          </>
        }>
          <Route path="user/*" element={<UserRoutes/>}/>
          <Route path="user/*" element={<UserRoutes/>}/>
        </Route>

        <Route path="user/*" element={<UserRoutes/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
