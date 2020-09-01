import { logError } from '../utils/logErrors'
import { StorageErrors } from '../utils/StorageErrors'
import HttpStatus from 'http-status-codes'
import { INewUserEmail } from '../models/UsersEmailModal'
import { createNewUser } from '../models/UsersEmailModal'

// Types and Interfaces
export interface ICreateNewUser extends INewUserEmail {}

// * REGISTER METHOD*/
export const create = async (req, res) => {
  const body = req.body as ICreateNewUser

  try {
    const result = await createNewUser(body)
    if (result.rowCount === 0) {
      res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .send(StorageErrors.ALREADY_EXISTS)
    } else {
      res.status(HttpStatus.CREATED).json(result.rows[0])
    }
  } catch (error) {
    logError(error)
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

export const UsersEmailController = {
  create: create,
}
