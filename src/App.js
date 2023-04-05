
import Layout from './Layout';

import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import NewApplication from './NewApplication/NewApplication'
import './App.css';
import SentApplication from './NewApplication/SentApplication';

function App() {
  return (
   
    <Router>
<Routes>       
<Route path="/" element={ <Layout replace to="/home" />} />
<Route path="/new-application" element={ <NewApplication replace to="/new-application" />} />
<Route path="/sent-application" element={ <SentApplication replace to="/sent-application" />} />
</Routes>
</Router>
  );
}

export default App;
