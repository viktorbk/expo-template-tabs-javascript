import { ADD_PROJECT, DELETE_PROJECT } from "./Types";
const initialState = {
  projects: [
    {
      number: '9747',
      name: 'Steinerud BHG',
      icon: 'lightbulb',
      status: 0
    },
    {
      number: '9746',
      name: 'ISS bygget',
      icon: 'lightbulb',
      status: 1
    },
    {
      number: '9746',
      name: 'COOP Lillestrom',
      icon: 'lightbulb',
      status: 2
    },
    {
      number: '9746',
      name: 'Maridalsveien',
      icon: 'lightbulb',
      status: 3
    },
  ]
}
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        tasks: [...state.projects, { projects: action.payload, done: false, id: Math.random().toString()}]
      }
    case DELETE_PROJECT:
      return {
        ...state,
        tasks: state.projects.filter(item => item.id != action.payload)
      }
    default:
      return state;
  }
}
export default projectReducer