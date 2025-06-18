import Calender from "../components/calendar/Calender"
import events from "../components/calendar/events.json"

function CalendarPage() {
  return (
    <div>
      <Calender events={events}/>
    </div>
  )
}
export default CalendarPage