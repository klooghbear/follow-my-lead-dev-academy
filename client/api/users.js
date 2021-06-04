import request from "superagent"

import {
  receivedError,
  requestUsers,
  receivedUsers,
} from "../actions/index"

import { getEncodedToken } from "authenticare/client"

const walkerPath = "/walkers"
const ownerPath = "/owners"
const userPath = "/users"

export const fetchWalkers = () => {
  return (dispatch) => {
    dispatch(requestUsers())
    return request
        .get(walkerPath)
        .set({ Authorization: `Bearer ${getEncodedToken()}` })
        .set({ Accept: "application/json" })
        .then((res) => res.body)
        .then((walker) => {
          console.log(walker)
          dispatch(receivedUsers(walker))
        })
        .catch((err) => {
          console.log(err)
          dispatch(receivedError(err))
        })
  }
}

export const fetchWalker = (id) => {
  const path = `${walkerPath}/${id}`

  return (dispatch) => {
    dispatch(requestUsers())
    return (
      request
          .get(path)
          .set({ Authorization: `Bearer ${getEncodedToken()}` })
          .set({ Accept: "application/json" })
          .then((res) => res.body)
          .then((walker) => {
            dispatch(receivedUsers(walker.body))
          })
          .catch((err) => {
            console.log(err)
            dispatch(receivedError(err))
          })
    )
  }
}

export const postWalker = (walker) => {
  return (dispatch) => {
    dispatch(requestUser())
    return request
        .post(walkerPath)
        .set({ Authorization: `Bearer ${getEncodedToken()}` })
        .set({ "Content-Type": "application/json" })
        .send(walker)
        .then((res) => res.body)
        .then((walker) => {
          dispatch(receivedUser(walker))
        })
        .catch((err) => {
          dispatch(receivedError(err))
        })
  }
}

export const fetchUserDetails = (id) => {
  const path = `${userPath}/${id}`
  console.log(`${process.env.BASE_API_URL}${path}`)
  console.log(id)

  const promise = request.get(path)

  return (dispatch) => {
    dispatch(requestUser())

    return Promise.resolve(promise)
        .set({ Authorization: `Bearer ${getEncodedToken()}` })
        .set({ "Content-Type": "application/json" })
        .then((user) => {
          return dispatch(receivedUser(user))
        })
        .then((res) => {
          return res.body
        })
        .catch((err) => {
          dispatch(receivedError(err))
        })
  }
}

export const editWalker = (id, walker) => {
  const path = `${walkerPath}/${id}/edit`

  return request
      .put(path)
      .set({ Authorization: `Bearer ${getEncodedToken()}` })
      .set({ Accept: "application/json" })
      .send(walker)
      .then((res) => res.body.walker)
      .catch((err) => console.log(err))
}

export const postOwner = (owner) => {
  return request
      .post(ownerPath)
      .set({ "Authorization": `Bearer ${getEncodedToken()}` })
      .set({ "Content-Type": "application/json" })
      .send(owner)
}

export const fetchOwner = (id) => {
  const path = `${ownerPath}/${id}`

  return request
      .get(path)
      .then((response) => response.body)
}

export const editOwner = (id, owner) => {
  const path = `${ownerPath}/${id}/edit`

  return request
      .put(path)
      .set({ "Authorization": `Bearer ${getEncodedToken()}` })
      .set({ "Accept": "application/json" })
      .send(owner)
      .then((res) => res.body.owner)
      .catch((err) => console.log(err))
}
