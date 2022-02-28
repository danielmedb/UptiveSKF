import React from 'react';
import './css/App.css';
import Menu from './Components/menu/Menu';
import Page from './Components/Page';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App: React.FC = () => {
  
  const [loading, setLoading] = React.useState<boolean>(true)

  return (
    <div className="App">
      <div className="header">Uptive @ SKF</div>
      <BrowserRouter>
      <div className="page">
        <div className="menu"> 
            <Menu  loading={loading} setLoading={setLoading} />
        </div>
        <div className="main">
          <Routes>
            <Route index element={<Page loading={loading} setLoading={setLoading} />} />
            <Route path="/:link" element={<Page loading={loading} setLoading={setLoading}   />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
