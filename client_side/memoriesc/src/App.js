import React,{useEffect} from "react";
import {useDispatch} from "react-redux";
import Posts from "./pages/Posts";
import GlobalStyles from "./components/GlobalStyles";
import {getposts} from "./actions/post";
const App = () => {
  const dispatch =useDispatch();
  useEffect(() =>{
      dispatch(getposts()); 
  },[dispatch])
  return (
    <div className="App">
      <GlobalStyles />
      <Posts />
    </div>
  );
};

export default App;
