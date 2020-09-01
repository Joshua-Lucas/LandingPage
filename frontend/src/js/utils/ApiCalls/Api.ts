// Api Urls
const ScoppechipoURL =
  'http://api.staging.scoppechiohosting.com/interview-test/index.json'

const url = 'http://localhost:3030/api/emails'

// interfaces
export interface IUserEmail {
  id: number
  email: string
}

export interface INewUserEmail {
  email: string
}

export interface ICreateNewUser extends INewUserEmail {}

// API METHODS
const get = async () => {
  const result = await fetch(ScoppechipoURL)
    .then((res) => res.json())
    .catch((error) => console.log('cannot fetch data', error))
  return result
}

export const postE = async (
  newEmail: INewUserEmail
): Promise<ICreateNewUser> => {
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEmail),
  })
    .then((res) => res.json())
    .catch(console.error)
  return result
}

export const api = {
  getArticles: get,
  postEmail: postE,
}
