import React from 'react';
import { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
}

export default Layout;