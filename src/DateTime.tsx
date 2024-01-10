type DateTimeProps = {
  time: string;
  date: string;
};

function DateTime({ time, date }: DateTimeProps) {
  return (
    <div className='date-time'>
      <h2>Date: {date}</h2>
      <h2>Time: {time}</h2>
    </div>
  );
}

export default DateTime;
