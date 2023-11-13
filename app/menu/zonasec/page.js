import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <><h1>Administrar zona de seguridad</h1>
      <button>

        <Link href='zonasec/agregarzona'> crear zona de seguridad </Link>
      </button>
      <button>

        <Link href='zonasec/modificarzona'> modificar zona de seguridad </Link>
      </button>
      <button>

        <Link href='zonasec/eliminarzona'> eliminar zona de seguridad </Link>
      </button>
      <button>

        <Link href='/menu'> volver </Link>
      </button></>
  )
}

export default page