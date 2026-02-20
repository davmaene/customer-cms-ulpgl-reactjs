import { Link } from "react-router-dom";
import { Colors } from "../../utils/utils.colors";

export const NavItem: React.FC<{ href: string; label: string; current?: boolean; hasPlus?: boolean, color?: string }> = ({ href, label, current = false, hasPlus = false, color }) => {
    return (
        <li className="wp-block-navigation-item">
            <Link className={`nav-link ${current ? 'active' : ''}`} to={href} style={{ textDecoration: 'none', color: color || Colors.whiteColor, padding: '0 15px', fontWeight: 500 }}>
                {label} {hasPlus && <span style={{ fontSize: '12px', marginLeft: '4px' }}>+</span>}
            </Link>
        </li>
    );
};

// export const NavItem: React.FC<{ href: string; label: string; current?: boolean }> = ({ href, label, current = false }) => {
//     return (
//         <li className="has-small-font-size wp-block-navigation-item wp-block-navigation-link">
//             <Link className={`wp-block-navigation-item__content ${current ? 'current-menu-item' : ''}`} to={href} {...(current && { 'aria-current': 'page' })}>
//                 <span className="wp-block-navigation-item__label">{label}</span>
//             </Link>
//         </li>
//     );
// };