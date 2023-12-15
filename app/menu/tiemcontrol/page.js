import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <><h1> Administrar tiempos de contol</h1>
      <button>

        <Link href='tiemcontrol/agregartiempo'> crear tiempo de control </Link>
      </button>
      <button>

        <Link href='tiemcontrol/modificartiempo'> modificar tiempo de control </Link>
      </button>
      <button>

        <Link href='tiemcontrol/eliminartiempo'> eliminar tiempo de control </Link>
      </button>
      <button>

        <Link href='/menu'> volver </Link>
      </button></>
  )
}

export default page
