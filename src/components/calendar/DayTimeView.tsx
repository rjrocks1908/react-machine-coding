function DayTimeView() {
  const slots = Array.from({ length: 24 }, (_, idx) => idx);
  return (
    <div>
      {slots.map((time) => (
        <div className="w-full h-20 pl-8 border-b border-b-white">{time}:00</div>
      ))}
    </div>
  );
}
export default DayTimeView;
