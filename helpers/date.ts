import moment from "moment"

export const formatDate = (dateString: string) => {
  return moment(dateString).format("L")
}

export const formatSimpleDate = (dateString: string) => {
  return moment(dateString).format("MM/YYYY")
}