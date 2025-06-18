import DayTimeView from "./DayTimeView";

interface Event {
  id: number;
  title: string;
  start: string;
  end: string;
}

interface Props {
  events: Event[];
}

function timeToMinutes(time: string) {
  const [h, m, s] = time.split(":").map(Number);
  return h * 60 + m + s / 60;
}

function Calender({ events }: Props) {
  const remPerMinute = 5 / 60;

  return (
    <div className="relative">
      <DayTimeView />
      <div className="absolute top-0 left-24 w-[1px] bg-white h-full"></div>

      {/* Events */}
      <div>
        {events.map((event) => {
          const startMinutes = timeToMinutes(event.start);
          const endMinutes = timeToMinutes(event.end);

          const top = startMinutes * remPerMinute;
          const height = (endMinutes - startMinutes) * remPerMinute;

          return (
            <div
              key={event.id}
              className="bg-amber-600 absolute w-[calc(100%-10rem)] left-32 text-center"
              style={{ top: `${top}rem`, height: `${height}rem` }}
            >
              {event.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Calender;
