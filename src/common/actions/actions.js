import * as types from '../constants/ActionTypes';
import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch';
import moment from 'moment';
//import moment from 'moment';

function loadingValidationList() {
  return {
    type: types.LOAD_USERVALIDATION
  }
}

function receiveValidationList(json) {
  return {
    type: types.LOAD_USERVALIDATION_SUCCESS,
    json
  }
}

export function usernameValidationList() {
  return dispatch => {
    dispatch(loadingValidationList())
    return fetch('/api/all_usernames')
      .then(response => {
        return response.json()
    })
      .then(json => {
        return dispatch(receiveValidationList(json.map((item) => item.local.username)))
    })
      .catch(error => {throw error});
  }
}


function addMessage(message) {
  return {
    type: types.ADD_MESSAGE,
    message
  };
}


export function welcomePage(username) {
  return {
    type: types.SAVE_USERNAME,
    username
  };
}

export function createMessage(message) {
  return dispatch => {
    dispatch(addMessage(message))
    return fetch('/api/newmessage', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)})
      .catch(error => {throw error});
  }
}

export function fetchMessages () {
  return dispatch => {
    dispatch(requestMessages())
    return fetch(`/api/messages/`)
      .then(response => response.json())
      .then(json => dispatch(receiveMessages(json)))
      .catch(error => {throw error});
  }
}

function requestMessages() {
  return {
    type: types.LOAD_MESSAGES
  }
}

function receiveMessages(json) {
  return {
    type: types.LOAD_MESSAGES_SUCCESS,
    json
  }
}
