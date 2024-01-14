import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();
    console.log(error)
  return (
    <div id="error-page">
        <h1>
            Arre 
        </h1>
        <p>
            Chal Nikal
        </p>
        <p>
            <i>
                {error.statusText || error.message}
            </i>
        </p>
    </div>
  )
}

export default ErrorPage