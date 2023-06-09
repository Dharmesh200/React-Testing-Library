// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage/TodoPage";
import FollowersPage from "./pages/FollowersPage/FollowersPage";
import Banner from "./components/Banner/Banner";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
    <div className="App">
      <Banner />
      <Routes>
        <Route strict exact path="/" component={TodoPage} />
        <Route strict exact path="/followers" component={FollowersPage} />
      </Routes>
    </div>
  );
}

export default App;
