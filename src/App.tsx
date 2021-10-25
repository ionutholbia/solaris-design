import Header from "./Header";
import Footer from "./Footer";
import Acasa from "./Acasa";
import Portofoliu from "./Portofoliu";
import { Component } from "react";
import { AppComponentsNames } from "./Types";
import RevizieAC from "./RevizieAC";
import RevizieCT from "./ReviziaCT";
import InlocuireCT from "./InlocuireCT";

interface IAppProps {}

interface IAppState {
  currentComponentName: AppComponentsNames;
}
class App extends Component<IAppProps, IAppState> {
  private readonly components = {
    Acasa: <Acasa />,
    Portofoliu: <Portofoliu />,
    RevizieAC: <RevizieAC />,
    RevizieCT: <RevizieCT />,
    InlocuireCT: <InlocuireCT />,
  };

  constructor(props: IAppProps) {
    super(props);

    this.state = {
      currentComponentName: AppComponentsNames.AcasaPage,
    };

    this.onPageSwitched = this.onPageSwitched.bind(this);
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
