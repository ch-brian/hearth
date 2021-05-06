import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';

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
      <Dashboard />
      {/* <button onClick={pingServer}>TEST SERVER</button> */}
    </div>
  );
}

export default App;
