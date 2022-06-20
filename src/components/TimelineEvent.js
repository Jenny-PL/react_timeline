import { Component } from "react";
import "./TimelineEvent.css";
import TimeStamp from "./TimeStamp";

// presentational Component with responisbilities of:
// Rendering the event's status message
// Rendering the event's author (person)
// Rendering the event's timestamp

/* <TimelineEvent
person={event.person}
status={event.status}
timestamp={event.timestamp}
></TimelineEvent> */

// The TimelineEvent component should use an instance
// of the TimeStamp component.

// props include: person, status, timestamp
const TimeLineEvent = (props) => {
  return (
    <ul>
      <li>Name: {props.person} </li>
      <li>Status: {props.status} </li>
      <li> Timestamp: {props.timestamp}</li>
    </ul>
  );
};

export default TimeLineEvent;