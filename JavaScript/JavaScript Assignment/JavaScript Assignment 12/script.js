let date = new Date();
let year = date.getFullYear();
let month = (date.getMonth() + 1).toString();
let dateToday = date.getDate().toString();
let hour = date.getHours().toString();
let min = date.getMinutes().toString();
let format1 = `${year}-${month.length > 1 ? month : "0" + month}-${
  dateToday.length > 1 ? dateToday : "0" + dateToday
} ${hour.length > 1 ? hour : "0" + hour}:${min.length > 1 ? min : "0" + min}`;
console.log(format1);
let format2 = `${dateToday.length > 1 ? dateToday : "0" + dateToday}-${
  month.length > 1 ? month : "0" + month
}-${year} ${hour.length > 1 ? hour : "0" + hour}:${
  min.length > 1 ? min : "0" + min
}`;
console.log(format2);
let format3 = `${dateToday.length > 1 ? dateToday : "0" + dateToday}/${
  month.length > 1 ? month : "0" + month
}/${year} ${hour.length > 1 ? hour : "0" + hour}:${
  min.length > 1 ? min : "0" + min
}`;
console.log(format3);
