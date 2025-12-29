import EventDateRangeModalInner from "./EventDateRangeModalInner";

export default function EventDateRangeModal(props) {
  if (!props.open) return null;
  return <EventDateRangeModalInner {...props} />;
}
