import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <><div className="card">
      <h2 className="card-header">Modificar tiempo de control</h2>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Username</label>
            <input name="username" type="text" />
          </div>
          <div className="form-group">
            <label>Tiempo</label>
            <input name="tiempo" type="tiempo" />
            <label>min</label>
          </div>
          
          <button>

            <div> modificar </div>
          </button>
          <button>
            <Link href='/menu/tiemcontrol'> volver </Link>
          </button>

        </form>
      </div>
    </div></>
  )
}

export default page