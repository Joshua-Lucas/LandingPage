import { pool as database } from '../utils/dbPool'

// Types and Interfaces

// this is the data passed to client if needed(Method not created yet)
export interface IUserEmail {
  id: number
  email: string
}

export interface INewUserEmail {
  email: string
}

// Methods

export const createNewUser = (user: INewUserEmail) =>
  database.query(
    `
  INSERT INTO usersemailtable (email)
  VALUES ($1)
  ON CONFLICT (email)
  WHERE email = ($1)
  DO NOTHING
  RETURNING id, email
  
  `,
    [user.email]
  )
