import "./App.css";
import timelineData from "./data/timeline.json";
import Timeline from "./components/Timeline";
import CityNameInput from "./components/CityNameInput";

function App() {
  console.log("The value of timelineData is", timelineData);
  console.log("We should use timelineData in our project somehow...");
  return (
    <div>
      <Timeline timelineData={timelineData}></Timeline>
      <CityNameInput></CityNameInput>
    </div>
  );
}

export default App;
