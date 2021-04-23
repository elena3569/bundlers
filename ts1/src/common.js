import { DateTime } from "./luxon.js";

export function diffDates( firstDate, secondDate, units){
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if(firstDate > secondDate){
        [firstDate, secondDate] = [secondDate, firstDate];
    }
    return secondDate.diff(firstDate, units).toObject();
}

export const formatError = text => `
<span style='color:red;'> ${text}</span>`