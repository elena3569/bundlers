
export function diffToHTML(diff){
    return `<span>
    Лет: ${diff.years},
    Месяцев: ${diff.months},
    Дней: ${diff.days}
    </span>`
}