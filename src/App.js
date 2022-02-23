import Header from "./components/Header";
import ShoppingCart from "./components/ShoopingCart";
import { Provider } from './MyContext'
import "./App.css";

function App() {
  return (
    <Provider>
      <Header />
      <ShoppingCart />
    </Provider>
  );
}

export default App;
