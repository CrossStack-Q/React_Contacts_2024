import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <>
            <div id='sidebar'>
                <h1>
                    Contacts App
                </h1>
                    <div>
                        <form id='search-form' role="search">
                            <input type="search" name="q" placeholder='Search' aria-label='Search Contacts' id='q' />
                            <div id="search-spinner" aria-hidden hidden={true} />
                            <div className='sr-only' aria-live='polite' />
                        </form>
                        <form method='post'>
                            <button type='submit'>
                                New
                            </button>
                        </form>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href={`/contacts/1`}>
                                    your Name
                                </a>
                            </li>
                            <li>
                                <a href={`/contacts/2`}>
                                    your Friend
                                </a>
                            </li>
                        </ul>
                    </nav>
            </div>
            <div id="detail">
                <Outlet/>
            </div>
        </>
    )
}

export default Root