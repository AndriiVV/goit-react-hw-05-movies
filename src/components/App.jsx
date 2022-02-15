import { Route, Switch } from "react-router-dom";

import MainNav from "./MainNav/MainNav";
import HomePage from "pages/HomePage"
import SearchForm from "pages/SearchForm";


export const App = () => {

  return (
    <div>
      <MainNav />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies">
          <SearchForm />
        </Route>

      </Switch>
    </div>
  );
};
