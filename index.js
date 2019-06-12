const http = require("http");
const port = 3000;

const period = 10000;
const interval = 1000;

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8;");

    console.log(toUTC(new Date()) + " запрос пришел в это время"), interval;
    let intervalId = setInterval(() => {
      console.log(toUTC(new Date())), interval;
    }, interval);

    setTimeout(() => {
      clearInterval(intervalId);
      console.log(toUTC(new Date()) + " остановка работы таймера");
      res.write(
        "текущая дата и время отключения в формате UTC: " + toUTC(new Date())
      );
      res.end();
    }, period);
  })
  .listen(port);

const toUTC = date => {
  return Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
};
