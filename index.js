const http = require("http");
const port = 3000;

http
  .createServer((req, res) => {
    const period = +process.env.Glacial_period;
    const interval = +process.env.Glacial_interval;
    // console.log(period, interval);

    res.setHeader("Content-Type", "text/html; charset=utf-8;");

    console.log(getNiceTime(new Date()) + " запрос пришел в это время"),
      interval;
    let intervalId = setInterval(() => {
      console.log("" + getNiceTime(new Date())), interval;
    }, interval);

    setTimeout(() => {
      clearInterval(intervalId);
      console.log(getNiceTime(new Date()) + " остановка работы таймера");
      res.write("текущая дата и время отключения: " + getNiceTime(new Date()));
      res.end();
    }, period);
  })
  .listen(port);

const getNiceTime = date => {
  const normalize = number => {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  };

  let hh = normalize(date.getHours());
  let mm = normalize(date.getMinutes());
  let ss = normalize(date.getSeconds());

  let day = normalize(date.getDay());
  let month = normalize(date.getMonth());
  let year = date.getFullYear();

  return `${day}.${month}.${year} в ${hh}:${mm}:${ss}`;
};
