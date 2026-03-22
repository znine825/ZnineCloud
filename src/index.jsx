import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css'

import MHome from './MHome/MHome.jsx'
import MLearn from './MLearn/MLearn.jsx'
import MExperience from './MExperience/MExperience.jsx'
import MTools from './MTools/MTools.jsx'
import MDocs from './MDocs/MDocs.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<MHome />} />
            <Route path="/learn" element={<MLearn />} />
            <Route path="/experience" element={<MExperience />} />
            <Route path="/tools" element={<MTools />} />
            <Route path="/docs" element={<MDocs />} />
        </Routes>
    </HashRouter>
);