import './nutrify.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Code from './pages/Codepage/Code';
import { AppProvider } from './pages/context/context';
import Datasets from './pages/Datasetpage/Datasets';
import Models from './pages/Modelpage/Models';
import Learn from './pages/Learnpage/Learn';
import Competitions from './pages/Competitionpage/Competitions';
import Blog from "./pages/Blog/Blog"
import Hostcomp from "./pages/Host Competition/Host"

import Discussions from './pages/Discussions Page/Discussions';
import Document from "./pages/Docs/Docs"
import Privacy from "./pages/Privacy/Privacy"
import Ranking from "./pages/Rankings/Rankings"
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Community from './pages/Discussions Page/Community.jsx';

import Team from './pages/Team/Team.jsx';
import TrendingDataset from './pages/Datasetpage/TrendingDataset.jsx';
import TopRequiredDataset from './pages/Datasetpage/TopRequiredDataset.jsx';
import TopRequiredModel from './pages/Modelpage/TopRequiredModel.jsx';

import Login from "./pages/Auth/Login.jsx"
import Signup from "./pages/Auth/Signup.jsx"

function App() {
  return (
    <div className="App">
      <AppProvider>

        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Home />} />
          
            <Route path='/code' element={<Code />} />
            <Route path="/dataset" element={<Datasets />} />
            <Route path="/dataset/trending-dataset" element={<TrendingDataset/>} />
            <Route path='/dataset/toptrending-dataset' element={<TopRequiredDataset/>}/>

            <Route path='/model' element={<Models />} />
            <Route path='/model/trending-model' element={<TopRequiredModel/>}/>


            <Route path='/courses' element={<Learn />} />
            <Route path='/competition' element={<Competitions />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/blog' element={<Blog />} />
            <Route path="/host-competition" element={<Hostcomp />} />
            <Route path='/discussions' element={<Discussions />} />
            <Route path='/discussions/community' element={<Community />} />
            <Route path='/documentation' element={<Document />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path="/rankings" element={<Ranking />} />
            <Route path="/team" element={<Team />} />

            <Route path="/login" element={<Login/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
