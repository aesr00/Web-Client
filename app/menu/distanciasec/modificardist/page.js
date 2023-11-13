import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <><div className="card">
      <h2 className="card-header">Crear distancia de seguridad</h2>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Victima</label>
            <input name="victima" type="text" />
          </div>
          <div className="form-group">
            <label>Agresor</label>
            <input name="agresor" type="text" />
          </div>
          <div className="form-group">
            <label>Distancia</label>
            <input name="distancia" type="distancia" />
            <label>Km</label>
          </div>
          
          <button>

            <div> modificar </div>
          </button>
          <button>
            <Link href='/menu/distanciasec'> volver </Link>
          </button>

        </form>
      </div>
    </div></>
  )
}

export default page