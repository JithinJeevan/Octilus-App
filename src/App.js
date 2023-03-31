import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstPage from "./components/FirstPage";

function App() {
  
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route
          path="/"
          element={
            <FirstPage
            
            />
          }
        />
        {/* {token && (
          <Route
            path="/after-login"
            element={
              <AfterLogin user={user} isLoading={isLoading} logout={logout} />
            }
          />
        )} */}
        {/* <Route path="*" element={<InvalidLogin />} /> */}
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
