import "./Main.css";

import Header from "./Header";
import Footer from "./Footer";
import Acasa from "./Acasa";
import Portofoliu from "./Portofoliu";
import { Component } from "react";

export enum AppComponents {
  AcasaPage = "Acasa",
  PortofoliuPage = "Portofoliu",
}

interface IAppProps {}

interface IAppState {
  currentComponentName: AppComponents;
}
class App extends Component<IAppProps, IAppState> {
  private readonly components = {
    Acasa: <Acasa />,
    Portofoliu: <Portofoliu />,
  };

  constructor(props: IAppProps) {
    super(props);

    this.state = {
      currentComponentName: AppComponents.PortofoliuPage,
    };
  }

  render() {
    return (
      <body>
        <Header />
        {this.components[this.state.currentComponentName]}
        <Footer />
      </body>
    );
  }
}

export default App;
