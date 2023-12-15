import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <><div className="card">
      <h2 className="card-header">Registrar de usuarios</h2>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Username</label>
            <input name="username" type="text" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input name="password" type="password" />
          </div>
          <div className="form-group">
            <label>Tipo</label>
            <select id="tipo">
              <option value="administrador" >Administrador </option>
              <option value="victima" >Victima </option>
              <option value="agresor" >Agresor </option>
            </select>
          </div>
          <button>

            <div> registrar </div>
          </button>
          <button>
            <Link href='/menu/gestusuarios'> volver </Link>
          </button>

        </form>
      </div>
    </div></>
  )
}

export default page