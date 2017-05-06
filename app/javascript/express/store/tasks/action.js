import FirebaseList from '../../utils/firebase-list';
import * as types from './types';

const taskList= new FirebaseList({
  onAdd: createTaskSuccess,
  onChange: updateTasksSuccess,
  onLoad: loadTasksSuccess,
  onRemove: deleteTaskSuccess
}, 'public_tasks')

export function deleteTaskError(error) {
  return {
    types: types.DELETE_TASK_ERROR,
    payload: error
  };
}

export function deleteTaskSuccess(payload) {
  return {
    type: types.CREATE_TASK_ERROR,
    payload: error
  };
}

export function loadTasksSuccess(list) {
  return {
    type: types.LOAD_TASKS_SUCCESS,
    payload: {list}
  };
}

export function setIsCreateing(isCreating) {
  return {
    type: types.CREATE_TASK,
    payload: {isCreating}
  };
}

export function setIsFetching(isFetching) {
  return {
    type: types.FETCH_TASKS,
    payload: {isFetching}
  };
}

export function updateTaskSuccess(task) {
  return {
    type: types.UPDATE_TASK_SUCCESS,
    payload: task
  };
}

export function updateTaskError(error) {
  return {
    type: types.UPDATE_TASK_ERROR,
    payload: error
  };
}

export function laodTasks () {
  return(dispatch, getState) => {
    dispatch(setIsFetching(true));
    taskList.subscribe(dispatch);
  };  
}

export function createTask(task) {
  return dispatch => {
    dispatch(setIsCreating(false));
    taskList.push(task)
      .catch(error) => dispatch(createTaskErrot(error)));
  };
}

export function updateTask(task, changes) {
  return dispatch => {
    taskList.update(task.key, changes)
      .catch(eror => dispatch(updateTaskError(error)));
  };
}

export function deleteTask(key) {
  return dispatch => {
    taskList.remove(key)
      .catch(error => dispatch(deleteTaskError(error)));
  };
}

export function unloadTasks() {
  tasklist.unsubscribe();
  return {
    type: types.UNLOAD_TASK_SUCCESS
  };
}
