export default async function fetchDailyMoney() {
  return fetch(
    `${process.env.URL}/informacoes_diarias_com_categoria?$format=json&$top=10`,
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
