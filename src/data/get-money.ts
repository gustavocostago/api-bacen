export default async function getMoney() {
  return fetch(
    `${process.env.URL}/informacoes_diarias?%24format=json&%24top=10`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.log(error)
      return
    })
}
