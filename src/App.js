import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import InputBox from "./components/InputBox/InputBox";
import { useState } from "react";
import { userAction } from "./redux/actions/userAction";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [input, setInput] = useState("");

  const storeData = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleOnSubmit = () => {
    dispatch(userAction(input));
    setInput("");
  };
  // console.log(storeData, input);

  return (
    <div className="App">
      <InputBox
        input={input}
        setInput={setInput}
        handleOnSubmit={handleOnSubmit}
      />
      <h1>Dashboard</h1>
      <Dashboard />
    </div>
  );
}

export default App;
