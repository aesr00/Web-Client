import React from 'react'
/*
import Image from 'next/image'
import styles from './page.module.css'
*/

import Link from 'next/link'

export const menu = () => {
  return (

    <><h2>menu</h2><>

      <ul>

        <button>
          <Link href='menu/zonasec'> Administrar zona de seguridad</Link>
        </button>

        <button>
          <Link href='menu/distanciasec'> Administrar distancia de alejamiento</Link>
        </button>

        <button>
          <Link href='menu/tiemcontrol'> Administrar tiempos de control</Link>
        </button>

        <button>
          <Link href='menu/gestusuarios'> Gestion de usuarios</Link>
        </button>
      </ul>
    </></>

  );


}

export default menu
