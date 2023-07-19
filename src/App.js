import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Login from "./pages/Login";
import UserDetail from "./pages/UserDetail";
import Contact from "./pages/Contact";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/userDetail" element={<UserDetail/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router> 
      </Provider>
    </div>
  );
}

export default App;
