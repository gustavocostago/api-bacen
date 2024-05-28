export default async function fetchTransacoesPorPix() {
  return fetch(
    `${process.env.URL_ESTATISTICA_PIX}/mecir_dinheiro_em_circulacao/versao/v1/odata/TransacoesPixPorMunicipio(DataBase='202405')?$format=json&$top=10`,
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
