// import images from "./data/images";
import "./index.css";
import Index from "./pages";
import { store } from "./redux";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
