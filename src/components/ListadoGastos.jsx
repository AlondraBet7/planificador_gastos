import Gasto  from "./Gasto"

const ListadoGastos = ({gastos, setGastosEditar}) => {
  return (
 
      <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? "Gastos" : "No hay gastos aún"}</h2>

        {gastos.map (gasto=>(
            <Gasto
            key={gasto.id}
            gasto={gasto}
            setGastoEditar ={setGastosEditar}
                />
        ))}
      </div>
  
  )
}

export default ListadoGastos
