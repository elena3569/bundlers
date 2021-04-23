// import diffDates from './common.js';
// import { DateTime } from "./luxon.js";

// export function diffDates( firstDate, secondDate){
//     firstDate = DateTime.fromISO(firstDate);
//     secondDate = DateTime.fromISO(secondDate);

//     if(firstDate > secondDate){
//         [firstDate, secondDate] = [secondDate, firstDate];
//     }
//     return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
// }

export function diffToHTML(diff){
    return `<span>
    Лет: ${diff.years},
    Месяцев: ${diff.months},
    Дней: ${diff.days}
    </span>`
}