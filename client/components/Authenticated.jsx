import React from "react"
import { isAuthenticated } from "authenticare/client"

export const IfAuthenticated = ({ children }) => {
  return isAuthenticated() ? <>{children}</> : null
}

export const IfNotAuthenticated = ({ children }) => {
  return !isAuthenticated() ? <>{children}</> : null
}
