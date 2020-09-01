const ScoppechipoURL =
  'http://api.staging.scoppechiohosting.com/interview-test/index.json'

const url = 'http://localhost:3000/api/reminders'

const get = async () => {
  const result = await fetch(ScoppechipoURL)
    .then((res) => res.json())
    .catch((error) => console.log('cannot fetch reminders', error))
  return result
}

const post

export const api = {
  getArticles: get,
}
