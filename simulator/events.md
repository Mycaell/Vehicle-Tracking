## Eventos Recebidos

### `RouteCreated`

Evento recebido quando uma rota é criada. Ele contém as seguintes informações:

- **id**: Identificador único da rota.
- **distance**: Distância total da rota (km).
- **directions**: Lista de coordenadas representando a rota.
  - **lat**: Latitude.
  - **lng**: Longitude.

### `DeliveryStarted`

Evento recebido quando uma entrega é iniciada. Ele contém:

- **route_id**: Identificador único da rota.

<br/>

## Eventos Retornados

### `FreightCalculated`

Evento retornado como resultado do cálculo de frete. Contém:

- **route_id**: Identificador da rota associada.
- **amount**: Valor calculado para o frete.

---

### `DriverMoved`

Evento retornado para atualizar a posição do motorista durante uma entrega. Contém:

- **route_id**: Identificador único da rota.
- **lat**: Latitude atual do motorista.
- **lng**: Longitude atual do motorista.
