import { DateTime } from "luxon";

// props could be destructured as {time}
const TimeStamp = (props) => {
  const time = DateTime.fromISO(props.time);
  const absolute = time.toFormat("MMMM Do YYYY, h:mm:ss a");
  const relative = time.toRelative();

  return <span title={absolute}> {relative} </span>;
};

export default TimeStamp;
