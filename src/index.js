function dateFormater(...args) {
  let d = new Date(...args);

  return {
    format: function (dateString) {
      let date = {
        "M+": d.getMonth() + 1,                  //返回月份
        "d+": d.getDate(),                     //返回天数
        "D{1}": getDates(d),                    //返回年中的天数(过了多少天)
        "H+": d.getHours(),                    //返回小时(24小时制)
        "h+": getHour(d.getHours()),                   //返回小时(12小时制)
        "F{1}": getDay(d.getDay()),                     //返回星期几
        "m+": d.getMinutes(),                  //返回分钟
        "s+": d.getSeconds(),                  //返回秒数
        "S{1}": d.getMilliseconds(),             //返回毫秒数
        "q+": Math.ceil((d.getMonth() + 1) / 3)    //返回季度
      };
      if (/(y+)/i.test(dateString)) {
        dateString = dateString.replace(RegExp.$1, (d.getFullYear().toString().substr(4 - RegExp.$1.length)));
      }
      for (let i in date) {
        if (new RegExp('(' + i + ')').test(dateString)) {
          dateString = dateString.replace(RegExp.$1, RegExp.$1.length === 1 ? date[i] : ('00' + date[i]).substr(date[i].toString().length));
        }
      }
      return dateString;
    }
  }
}

function getDay(num) {
  const words = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  return words[num];
}

function getHour(hour) {
  return (hour > 12) ? hour - 12 : hour;
}

function getDates(d) {
  let year = d.getFullYear();
  let leapYear = false;
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    leapYear = true;
  } else {
    leapYear = false;
  }
  let sum = 0;
  for (let i = 0, len = d.getMonth(); i < len; i++) {
    switch (i) {
      case 0:
      case 2:
      case 4:
      case 6:
      case 7:
      case 9:
      case 11:
        sum += 31;
        break;
      case 1:
        if (leapYear) {
          sum += 29;
        } else {
          sum += 28;
        }
        break;
      case 3:
      case 5:
      case 8:
      case 10:
        sum += 30;
        break;
    }
  }
  return sum + d.getDate();
}

export default dateFormater;