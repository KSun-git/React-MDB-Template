import React from 'react';
import { MDBFooter} from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="grey darken-1" className="text-center font-small darken-2">
            <h3>Footer</h3>
			<p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: 
				<a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </p>
        </MDBFooter>
    );
}

export default Footer;