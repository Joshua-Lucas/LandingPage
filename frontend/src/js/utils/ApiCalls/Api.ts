const ScoppechipoURL =
  'http://api.staging.scoppechiohosting.com/interview-test/index.json'

const get = async () => {
  const result = await fetch(ScoppechipoURL)
    .then((res) => res.json())
    .catch((error) => console.log('cannot fetch reminders', error))
  return result
}

export const api = {
  getArticles: get,
}
