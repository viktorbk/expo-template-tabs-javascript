import { ADD_ALERT, DELETE_ALERT } from "./Types"

export const addAlert = (alert) => ({
  type: ADD_ALERT,
  payload: alert
})

export const deleteAlert = (id) => ({
  type: DELETE_ALERT,
  payload: id
})
