export default async function fetchChavesPix() {
  return fetch(
    `${process.env.URL}/Pix_DadosAbertos/versao/v1/odata/ChavesPix(Data='2023-08-01')?$format=json&$top=10`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json;odata.metadata=minimal',
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
