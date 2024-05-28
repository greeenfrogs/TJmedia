import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Request_writemode from './component/Request_writemode';
import Request_viewmode from './component/Request_viewmode';
import Request from './component/Request';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Request />} /> {/* 기본 경로 추가 */}
                <Route path="/request" element={<Request />} />
                <Route path="/request/writemode" element={<Request_writemode />} />
                <Route path="/request/view/:id" element={<Request_viewmode />} />
                <Route path="/request/update/:id" element={<Request_writemode />} /> {/* 수정 페이지로 재사용 */}
            </Routes>
        </Router>
    );
}

export default App;
