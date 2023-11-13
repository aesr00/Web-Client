import React from 'react'
import styles from 'vistas/page.module.css'
import Link from 'next/link'

const distanciasec = () => {
  return (
    <>

      <description className={styles.description}></description>

      <h1>Administrar distancia de alejamiento</h1>

      <button>

            <Link href='distanciasec/agregardist'> crear distancia de alejamiento </Link>
          </button>
          <button>

            <Link href='distanciasec/modificardist'> modificar distancia de alejamiento </Link>
          </button>
          <button>

            <Link href='distanciasec/eliminardist'> eliminar distancia de alejamiento </Link>
          </button>
      <button>

        <Link href='/menu'> volver </Link>
      </button>
    </>

  )
}

export default distanciasec