import "./Main.css";

import Header from "./Header";
import Footer from "./Footer";
import Acasa from "./Acasa";
import Portofoliu from "./Portofoliu";
import { Component } from "react";
import { AppComponentsNames } from "./Types";

interface IAppProps {}

interface IAppState {
  currentComponentName: AppComponentsNames;
}
class App extends Component<IAppProps, IAppState> {
  private readonly components = {
    Acasa: <Acasa />,
    Portofoliu: <Portofoliu />,
  };

  constructor(props: IAppProps) {
    super(props);

    this.state = {
      currentComponentName: AppComponentsNames.AcasaPage,
    };

    this.onPageSwitched = this.onPageSwitched.bind(this)
  }

  onPageSwitched(newComponentName: AppComponentsNames) {
    this.setState({ currentComponentName: newComponentName });
  }

  render() {
    return (
      <body>
        <Header onPageSwitched={this.onPageSwitched} />
        {this.components[this.state.currentComponentName]}
        <Footer />
      </body>
    );
  }
}

export default App;
