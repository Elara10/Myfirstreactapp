import logo from './logo.svg';
import './App.css';

  //components 
import NavBar from './components/NavBar';
import CodeforInterview from './components/CodeforInterview';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';


function App() {
  return ( 
    <div className="App">
      <NavBar />
      <CodeforInterview />
      {/* <AllUsers /> */}
      <AddUser />

    </div>
  );
}

export default App;
