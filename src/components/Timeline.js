import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";

// props include timelineData
const Timeline = (props) => {
  // render list of TimelineEvent components
  const timelineEventComponents = [];
  for (const event of props.timelineData.events) {
    timelineEventComponents.push(
      <li key={event.timestamp}>
        <TimelineEvent
          person={event.person}
          status={event.status}
          timestamp={event.timestamp}
        ></TimelineEvent>
      </li>
    );
  }
  return <ul>{timelineEventComponents}</ul>;
};

export default Timeline;
