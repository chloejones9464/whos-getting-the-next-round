// This is a 404 page that will be displayed when the user tries to access a page that does not exist
import React from 'react';
import '.custom404.css';
import { useRouter } from 'next/router';

export default function custom404() {
    const router = useRouter();

    const mainMenu = () => {
        router.push('/index.html'); // Redirect to the main menu page
    };

    return <div className='styles.errorContainer'>
    <h1>404</h1>
    <div>Ops! Looks like you've gone to the wrong pub!</div> <br/>
    <div>Don't worry, I'll give you a lift</div>
    <button type="button" onClick={mainMenu} className='styles.errorMainMenuButton' >Jump in!!
        (Main Menu)</button>
    </div>
  }