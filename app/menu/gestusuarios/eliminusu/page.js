import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <><div className="card">
      <h2 className="card-header">Eliminar de usuarios</h2>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Username</label>
            <input name="username" type="text" />
          </div>
          
          <button>

            <div> eliminar </div>
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