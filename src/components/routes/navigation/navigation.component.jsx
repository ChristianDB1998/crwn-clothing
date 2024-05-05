import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-link-container">
                    <Link className="nav-link" to="/shop">shop</Link>
                    <Link className="nav-link" to="/sign-in">sign in</Link>
                    <Link className="nav-link" to="/men">men</Link>
                    <Link className="nav-link" to="/men">women</Link>
                </div>    
            </div>
            
            <Outlet />
        </Fragment>
    );
};

export default Navigation;