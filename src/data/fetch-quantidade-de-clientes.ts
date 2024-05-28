export default async function fetchQuantidadeDeClientes() {
  return fetch(
    `${process.env.URL}/selic_clientes/versao/v1/odata/QuantidadePorTipoCliente(Data='2023-08-01')?$format=json&$top=10`,
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
