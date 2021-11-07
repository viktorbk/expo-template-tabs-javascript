import { ADD_PROJECT, DELETE_PROJECT } from "./Types";
const initialState = {
  alerts: [
    {
      number: '1',
      name: 'Failure in project 1',
      icon: 'thumbtack',
      status: 0
    },
    {
      number: '9746',
      name: 'Failure in project 2',
      icon: 'thumbtack',
      status: 1
    },
    {
      number: '9746',
      name: 'Failure in project 3',
      icon: 'thumbtack',
      status: 2
    },
    {
      number: '9746',
      name: 'Failure in project 4',
      icon: 'thumbtack',
      status: 3
    },
  ]
}
const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        tasks: [...state.alerts, { alerts: action.payload, done: false, id: Math.random().toString()}]
      }
    case DELETE_PROJECT:
      return {
        ...state,
        tasks: state.alerts.filter(item => item.id != action.payload)
      }
    default:
      return state;
  }
}
export default alertReducer