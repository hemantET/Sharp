import logo from "./logo.svg";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Login from "./component/login/Login";
import Countdown from "./component/login/countdown";
import Layout from "./component/layout";
import Footer from "./component/footer";
import Dashboard from "./component/dashBoard/dashboard";
import Mainstage from "./component/mainStage/mainStage";
import Confrence_Carousel from "./component/dashBoard/carousel_Confrence";
import Carousel_Breakout from "./component/dashBoard/carousel_Breakout";
import Profile from "./component/myProfile/profile";
import Example from "./component/example";
import Widget from "./component/widget";
import MeetupLounges from "./component/meetupLounges/meetuplounges";
import Speakers from "./component/speakers/speakers";
import Faq from "./component/FAQ/faq";
import MainStageCarousel from "./component/dashBoard/mainStageCarousel";
import Agenda from "./component/agenda/agenda";
import BreakoutSession from "./component/breakOutSession/breakoutSession";
import Health_Assessments from "./component/health_Assessments/health_Assessments";
import Test from './component/dashBoard/test'
const Routing = () => {
  return (
    <Switch>
       <Route exact path="/test">
        <Test />
      </Route>
      <Route exact path="/breakoutSession">
        <BreakoutSession />
      </Route>
      <Route exact path="/health_Assessments">
        <Health_Assessments />
      </Route>
      <Route exact path="/Agenda">
        <Agenda />
      </Route>
      <Route exact path="/mainStageCarousel">
        <MainStageCarousel />
      </Route>
      <Route exact path="/FAQ">
        <Faq />
      </Route>
      <Route exact path="/meetup_Lounges">
        <MeetupLounges />
      </Route>
      <Route exact path="/speakers">
        <Speakers />
      </Route>
      <Route exact path="/example">
        <Example />
      </Route>
      <Route exact path="/widget">
        <Widget />
      </Route>
      <Route exact path="/mainstage">
        <Mainstage />
      </Route>
      <Route exact path="/Login">
        <Login />
      </Route>
      <Route exact path="/">
        <Countdown />
      </Route>
      <Route exact path="/layout">
        <Layout />
      </Route>
      <Route exact path="/footer">
        <Footer />
      </Route>
      <Route exact path="/dashBoard">
        <Dashboard />
      </Route>
      <Route exact path="/carousel_Confrence">
        <Confrence_Carousel />
      </Route>
      <Route exact path="/carousel_Breakout">
        <Carousel_Breakout />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
