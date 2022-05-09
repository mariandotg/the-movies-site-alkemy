import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/list" component={List} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
