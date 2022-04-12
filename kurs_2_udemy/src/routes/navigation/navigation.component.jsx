
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment> 
        {/* Fragment se koristi kada u ovim situacijama, kada se prikazuje navbar i ispod ostatak
        da se ne prikaze cijeli wrapper */}
      <div className="navigation">
        <Link className="logo-container" to="/">
            <CrownLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                SHOP
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;