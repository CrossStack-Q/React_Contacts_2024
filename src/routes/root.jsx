import React from 'react'
import { Outlet, Link, useLoaderData, Form } from 'react-router-dom'

export async function loader() {
    const contacts = await getContacts();
    return { contacts };
}

import { getContacts, createContact } from "../contacts";

export async function action() {
    const contact = await createContact();
    return { contact };
}

function Root() {
    const { contacts } = useLoaderData();
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
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <Link to={`contacts/${contact.id}`}>
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}

export default Root