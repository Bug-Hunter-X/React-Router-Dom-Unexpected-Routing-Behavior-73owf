```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  useEffect(() => {
    console.log('Home component mounted:', location.pathname);
    // Cleanup function to handle potential race conditions
    return () => console.log('Home component unmounted');
  }, [location]);
  return <div>Home</div>;
}

function About() {
  const location = useLocation();
  useEffect(() => {
    console.log('About component mounted:', location.pathname);
    return () => console.log('About component unmounted');
  }, [location]);
  return <div>About</div>;
}
export default App;
```