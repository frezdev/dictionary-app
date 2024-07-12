import days from 'dayjs'

export const date = {
  day: (date: string | Date) => {
    return days(date).format('DD/MM/YYYY')
  },
  hour: (date: string | Date) => {
    return days(date).format('HH:mm ')
  }
}