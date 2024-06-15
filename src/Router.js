import {Routes,BrowserRouter, Route, } from "react-router-dom";
import StudentList from "./components/ListStudent";
import Favourite from "./components/Favourite";
import { OwnContext } from "./Context";
const Pages=()=>{
    return (
        <div>
            <OwnContext>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudentList />}></Route>
                <Route path="/favourite" element={<Favourite/>}></Route>
            </Routes>
            </BrowserRouter>
            </OwnContext>
           
            
        </div>
    )
}
export default Pages;