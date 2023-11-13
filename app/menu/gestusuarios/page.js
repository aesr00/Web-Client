import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <><div className="card">
      <h2 className="card-header">Gestion de usuarios</h2>
      <div className="card-body">
        <form>
          
          <button>

            <Link href='gestusuarios/agregarusu'> registrar usuario </Link>
          </button>
          <button>

            <Link href='gestusuarios/modificarusu'> modificar usuario </Link>
          </button>
          <button>

            <Link href='gestusuarios/eliminusu'> eliminar usuario </Link>
          </button>
          <button>

            <Link href='/menu'> volver </Link>
          </button>

        </form>
      </div>
    </div></>
  )
}

export default page