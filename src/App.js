import React, { Suspense, lazy } from 'react';
import Header from './components/Header/Header';
import './App.css';

const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));

function App() {
  // const pingServer = async () => {
  //   await fetch('/test', {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <Dashboard />
      </Suspense>
      {/* <button onClick={pingServer}>TEST SERVER</button> */}
    </div>
  );
}

export default App;
