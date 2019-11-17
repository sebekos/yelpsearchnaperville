export const dayConvert = day => {
    switch (day) {
        case 0:
            return "Monday";
        case 1:
            return "Tuesday";
        case 2:
            return "Wednesday";
        case 3:
            return "Thursday";
        case 4:
            return "Friday";
        case 5:
            return "Saturday";
        case 6:
            return "Sunday";
        default:
            return "N/A";
    }
};

export const timeConvert = time => {
    var hours24 = parseInt(time.substring(0, 2));
    var hours = ((hours24 + 11) % 12) + 1;
    var amPm = hours24 > 11 ? "pm" : "am";
    var minutes = time.substring(2);
    return hours + ":" + minutes + amPm;
};

export const isOpenNow = status => {
    if (status === true) {
        return "Open";
    } else {
        return "Closed";
    }
};
