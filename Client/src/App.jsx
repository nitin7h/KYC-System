import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import GetDataFromBlockchain from "./components/GetDataFromBlockchain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataDetails from "./components/DataDetails";
import Home from "./components/Home";
import MainPage from "./components/MainPage";
import PostDataOnBlockchain from "./components/PostDataOnBlockchain";
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
            path="/postDataOnBlockchain"
            element={<PostDataOnBlockchain></PostDataOnBlockchain>}
          ></Route>
          <Route
            path="/VerifyOtp"
            element={<VerifyOtp></VerifyOtp>}
          ></Route>



          <Route
            path="/gettDatafromBlockchain"
            element={<GetDataFromBlockchain></GetDataFromBlockchain>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
