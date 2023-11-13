import styles from 'vistas/page.module.css'
import Link from 'next/link'




export default function Home() {

  return (

    <main className={styles.main}>
      <h1>
        AttackerVictim
      </h1>

      <div className="card">
        <h2 className="card-header">Login</h2>
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
            <button >
              <Link href='menu'> login </Link>
            </button>

          </form>
        </div>
      </div>


    </main>
  )
}

/*
disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            */