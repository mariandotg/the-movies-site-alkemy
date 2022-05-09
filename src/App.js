import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import List from "./components/List";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/list" component={List} />
      </Switch>
    </>
  );
};

export default App;
