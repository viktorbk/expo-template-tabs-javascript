import { ADD_PROJECT, DELETE_PROJECT } from "./Types"

export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: project
})

export const deleteProject = (id) => ({
  type: DELETE_PROJECT,
  payload: id
})
