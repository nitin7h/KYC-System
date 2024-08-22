import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import GetDataFromDb from "./components/GetDataFromDb";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataDetails from "./components/DataDetails";
import Home from "./components/Home";
import MainPage from "./components/MainPage";
import PostDataOnDb from "./components/PostDataOnDb";
import VerifyOtp from "./components/VerifyOtp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>

          <Route
            path="/dataDetails"
            element={<DataDetails></DataDetails>}
          ></Route>

          <Route path="/mainpage" element={<MainPage></MainPage>}></Route>
          <Route
            path="/postDataOnDb"
            element={<PostDataOnDb></PostDataOnDb>}
          ></Route>
          <Route path="/VerifyOtp" element={<VerifyOtp></VerifyOtp>}></Route>

          <Route
            path="/gettDatafromDb"
            element={<GetDataFromDb></GetDataFromDb>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
