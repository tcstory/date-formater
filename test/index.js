"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function DateFormater() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    this._d = new (Function.prototype.bind.apply(Date, [null].concat(args)))();
}

DateFormater.prototype.format = function (dateString) {
    var x = 4;
    var date = {
        "M+": this._d.getMonth() + 1, //返回月份
        "d+": this._d.getDate(), //返回天数
        "D{1}": this._get_date(), //返回年中的天数(过了多少天)
        "H+": this._d.getHours(), //返回小时(24小时制)
        "h+": this._get_hours(), //返回小时(12小时制)
        "F{1}": this._get_day(), //返回星期几
        "m+": this._d.getMinutes(), //返回分钟
        "s+": this._d.getSeconds(), //返回秒数
        "S{1}": this._d.getMilliseconds(), //返回毫秒数
        "q+": Math.ceil((this._d.getMonth() + 1) / 3) //返回季度
    };
    if (/(y+)/i.test(dateString)) {
        dateString = dateString.replace(RegExp.$1, this._d.getFullYear().toString().substr(4 - RegExp.$1.length));
    }
    for (var i in date) {
        if (new RegExp('(' + i + ')').test(dateString)) {
            dateString = dateString.replace(RegExp.$1, RegExp.$1.length === 1 ? date[i] : ('00' + date[i]).substr(date[i].toString().length));
        }
    }
    return dateString;
};

DateFormater.prototype._get_date = function () {
    var year = this._d.getFullYear();
    var leapYear = false;
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        leapYear = true;
    } else {
        leapYear = false;
    }
    var sum = 0;
    for (var i = 0; i < this._d.getMonth(); i++) {
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
    return sum + this._d.getDate();
};

DateFormater.prototype._get_day = function () {
    var week = this._d.getDay();
    switch (week) {
        case 0:
            return "星期天";
        case 1:
            return "星期一";
        case 2:
            return "星期二";
        case 3:
            return "星期三";
        case 4:
            return "星期四";
        case 5:
            return "星期五";
        case 6:
            return "星期六";
    }
};

DateFormater.prototype._get_hours = function () {
    var hours = this._d.getHours();
    return hours > 12 ? hours - 12 : hours;
};

exports.default = DateFormater;