import { routes } from "../../utils/utils.routes";
import { Link, useLocation } from "react-router-dom";

export const TopNavigation: React.FC = () => {
  const location = useLocation();
  const items = [
    { href: routes.BIBLIO, label: "Bibliothèque" },
    { href: routes.METANOIA, label: "Metanoia" },
    { href: routes.KAUTA, label: "Kauta" },
    { href: routes.KAUTA_MATERNEL, label: "Crèche" },
  ];

  return (
    <nav className="top-navigation-bar" aria-label="Top navigation">
      <ul className="top-nav-list">
        {items.map((item) => {
          const active = location.pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                to={item.href}
                className={`top-nav-link ${active ? "active" : ""}`}
                data-testid={`topnav-${item.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
