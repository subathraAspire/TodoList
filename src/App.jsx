import { useState, useEffect } from 'react';
import Dashboard from '../src/pages/Dashboard';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
