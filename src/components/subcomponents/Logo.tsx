import { APPNAME, APPOWNER } from "../../utils/utils.constants";
import logo from '../../assets/logo.png';
import { NavItem } from "./NavItem";
import { NavLink } from "react-router-dom";
import { routes } from "../../utils/utils.routes";
import { Colors } from "../../utils/utils.colors";

export const Logo: React.FC = () => {
    return (
        <div className="logo-container- w-100" style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", gap: '15px' }}>
            <NavLink to={routes.HOME} className="custom-logo-link w-100" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img
                    width="50"
                    height="30"
                    className="custom-logo"
                    alt={APPNAME}
                    src={logo}
                />
                <div className="logo-text-mobile-">
                    <h1 style={{ margin: 0, fontSize: '1.2rem', color: Colors.primaryColor }} className="fw-bold">{APPNAME}</h1>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: Colors.darkColor }} className="fw-bold">{APPOWNER}</p>
                </div>
            </NavLink>
        </div>
    );
};