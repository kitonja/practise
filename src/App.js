import { Provider } from "react-redux";
import Posts from "./components/Posts";
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="container">
          <Posts />
        </header>
      </div>
    </Provider>
  );
};

export default App;
