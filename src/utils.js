export default function dateDiff(date) {
    // Convertir date a String
    var dateStr = ''
    const d = new Date(date)
    const day = d.getDate()
    const month = d.getMonth()+1
    const year = d.getFullYear()
    const h = d.getHours()
    const m = d.getMinutes()
    const s = d.getSeconds()
    dateStr = `${day}/${month}/${year} ${h}:${m}:${s}`

    // Calcular diferencia de tiempo respecto a la actualidad
    var dateDiffStr = ''
    const currentTimestamp = Date.now()
    const diff = currentTimestamp-d
    const diffS = Math.floor(diff/1000)
    const diffM = Math.floor(diffS/60)
    const diffH = Math.floor(diffM/60)
    if (diffS < 60) {
      dateDiffStr = `${diffS}s`
    } else if (diffM < 60) {
      dateDiffStr = `${diffM}m`
    } else if (diffH < 24) {
      dateDiffStr = `${diffH}h`
    } else {
      dateDiffStr = `${day} ${month}`
    }

    return {dateStr, dateDiffStr}
}