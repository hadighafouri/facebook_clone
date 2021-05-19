import './App.css';
import Feed from './containers/Feed';
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import Widget from './containers/Widget';
import Login from './containers/Login';
import {useStateValue} from './contexAPI/StateProvider';
function App () {
  const [{user}, dispatch] = useStateValue ();
  return (
    <div className="app">
      {!user
        ? <Login />
        : <div>
            <Header user={user} />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widget />
            </div>
          </div>}

    </div>
  );
}

export default App;
