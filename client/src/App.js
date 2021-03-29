import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext";
import { useEffect, useState } from "react";
import axios from "axios";
//import './App.css';

function App() {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res);
        })
        .catch((err) => console.log("no token"));
    };
    fetchToken();
  }, []);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
