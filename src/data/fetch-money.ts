export default async function fetchMoney() {
  return fetch(
    `${process.env.URL}/mecir_dinheiro_em_circulacao/versao/v1/odata/informacoes_diarias?$format=json&$top=10`,
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
