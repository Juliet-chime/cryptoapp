
import { Link,BrowserRouter, Route, Routes, } from "react-router-dom";
import {Layout, Typography,Space} from "antd"
import {Navbar,HomePage,Exchange,CryptoDetails,Cryptocurrencies,News} from "./component"
import "./App.css"

function App() {
  return (
    <div className="App">
     <div className="navbar">
       <Navbar/>
     </div>
     <div className="main">
<Layout>
  <div className="routes">
    <Routes>
    <Route path="/" exact element={<HomePage/>} />
    <Route path="/exchanges" exact element={<Exchange/>} />
    <Route path="/cryptocurrencies" exact element={<Cryptocurrencies/>} />
    <Route path="/crypto/:coinId" exact element={<CryptoDetails/>} />
    <Route path="/news" exact element={<News/>} />
    
    </Routes>
  </div>
</Layout>
       <div className="footer">
         <Typography.Title level={5} style={{color:"white",textAlign:"center"}}>
CryptoVerse<br/>
All right reversed
         </Typography.Title >
         <Space>
           <Link to="/">Home</Link>
           <Link to="/exchanges">Exchanges</Link>
           <Link to="/news">News</Link>
         </Space>
       </div>
     </div>
    </div>
  );
}

export default App;
