import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Colors } from "../../utils/utils.colors";
import { LuPlus, LuChevronRight, LuChevronDown } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const LuChevronRightIcon = LuChevronRight as any;
const LuPlusIcon = LuChevronDown as any;

export const NavItem: React.FC<NavItemProps> = ({
    href,
    label,
    hasPlus = false,
    color,
    icon,
    subItems,
    isSubMenu = false,
    state
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isActive = location.pathname === href;

    const renderBadge = () => {
        if (subItems) {
            return isSubMenu ? <LuChevronRightIcon size={14} /> : <LuPlusIcon size={14} />;
        }
        return null;
    };

    return (
        <li
            className={`wp-block-navigation-item ${subItems ? 'has-child' : ''}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            style={{ position: 'relative', listStyle: 'none' }}
        >
            <Link
                className={`nav-link ${isActive ? 'active' : ''}`}
                to={href}
                state={state}
                style={{
                    textDecoration: 'none',
                    color: isSubMenu ? '#333' : (color || Colors.whiteColor),
                    padding: isSubMenu ? '10px 20px' : '8px 15px',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isSubMenu ? 'space-between' : 'center',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {icon && <span style={{ display: 'flex' }}>{icon}</span>}
                    <span>{label}</span>
                </div>
                {(hasPlus || subItems) && (
                    <span style={{ marginLeft: '8px', display: 'flex' }}>
                        {renderBadge()}
                    </span>
                )}
            </Link>

            <AnimatePresence>
                {subItems && isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            top: isSubMenu ? 0 : '100%',
                            left: isSubMenu ? '100%' : 0,
                            backgroundColor: 'white',
                            minWidth: '220px',
                            padding: '10px 0',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            zIndex: 100,
                            // borderTop: isSubMenu ? 'none' : `3px solid ${Colors.primaryColor}`,
                            borderLeft: isSubMenu ? `3px solid ${Colors.primaryColor}` : 'none',
                            margin: 0,
                            listStyle: 'none'
                        }}>
                        {subItems.map((item, index) => (
                            <NavItem
                                key={index}
                                href={item.href}
                                label={item.label}
                                icon={item.icon}
                                subItems={item.subItems}
                                state={item.state}
                                isSubMenu={true} // On passe en mode sous-menu
                            />
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
    );
};