import Header from "./Header";
import Footer from "./Footer";
import Acasa from "./Acasa";
import Portofoliu from "./Portofoliu";
import { Component } from "react";
import { AppComponentsNames } from "./Types";
import RevizieAC from "./RevizieAC";
import RevizieCT from "./ReviziaCT";
import InlocuireCT from "./InlocuireCT";
import {
  withRouter,
  RouteComponentProps,
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

interface IAppProps extends RouteComponentProps {}

interface IAppState {}
class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      currentComponentName: AppComponentsNames.Acasa,
    };

    this.onPageSwitched = this.onPageSwitched.bind(this);
  }

  onPageSwitched(newComponentName: AppComponentsNames) {
    this.props.history.push(`/${newComponentName}`);
  }

  render() {
    return (
      <Router>
        <body>
          <Header onPageSwitched={this.onPageSwitched} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to={`/${AppComponentsNames.Acasa}`} />;
              }}
            />
            <Route path={`/${AppComponentsNames.Acasa}`} component={Acasa} />
            <Route
              path={`/${AppComponentsNames.RevizieCT}`}
              component={RevizieCT}
            />
            <Route
              path={`/${AppComponentsNames.RevizieAC}`}
              component={RevizieAC}
            />
            <Route
              path={`/${AppComponentsNames.InlocuireCT}`}
              component={InlocuireCT}
            />
            <Route
              path={`/${AppComponentsNames.Portofoliu}`}
              component={Portofoliu}
            />
          </Switch>
          <Footer />
        </body>
      </Router>
    );
  }
}

export default withRouter(App);
