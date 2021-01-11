import { Redirect, Route, Switch } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/marvel" component={MarvelScreen} />
        <Route exact path="/hero/:heroeId" component={HeroScreen} />
        <Route exact path="/dc" component={DcScreen} />
        <Route exact path="/login" component={LoginScreen} />

        <Redirect to="/marvel" />
      </Switch>
    </>
  );
};
