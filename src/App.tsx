import "./App.css";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Filter from "./components/Filter";
function App() {
  return (
    <div className="layout ">
      <div className=".sidebar .open ">
        <Navbar />
      </div>
      <div className=" home-section container ">
        <div className="nav"></div>
        <div className="mainArea ">
          <Head />
          <div
            id="style-1"
            className="Stocks"
            style={{ height: "100vh", overflowY: "scroll" }}
          >
            <Card name="AMZN" color="red" risk="Low Risk" />
            <Card name="TSLA" color="green" risk="High Risk" />
            <Card name="ABQQ" color="green" risk="High Risk" />
            <Card name="MSFT" color="red" risk="Low Risk" />
            <Card name="PYPL" color="green" risk="Low Risk" />
            <Card name="NFLX" color="red" risk="Low Risk" />
            <Card name="NFLX" color="red" risk="Low Risk" />
            <Card name="NFLX" color="red" risk="Low Risk" />
            <Card name="NFLX" color="red" risk="Low Risk" />
            <Card name="NFLX" color="red" risk="Low Risk" />
            <Card name="NFLX" color="red" risk="Low Risk" />
            <Card name="NFLX" color="red" risk="Low Risk" />
          </div>
        </div>
        <div className="filters">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default App;
