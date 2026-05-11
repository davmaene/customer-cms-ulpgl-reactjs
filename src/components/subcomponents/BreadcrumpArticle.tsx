import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/utils.fucntions";
import { routes } from "../../utils/utils.routes";

export const BreadcrumbArticle = ({ category, post_title }: { category: string, post_title: string }) => (
    <div style={{ gap: '.4em' }} className="breadcrumb-block mb-4">
        <nav aria-label="Breadcrumbs">
            <ol className="breadcrumb list-unstyled d-flex m-0">
                <li className="breadcrumb-item"><a href="#">{capitalizeFirstLetter(routes.HOME.substring(1))}</a><span className="mx-2 text-muted">/</span></li>
                <li className="breadcrumb-item-"><a href="#">Articles</a><span className="mx-2 text-muted">/</span></li>
                <li className="breadcrumb-item-"><Link to={routes.ARTICLES.concat("/").concat(category)}>{category}</Link><span className="mx-2 text-muted">/</span></li>
                <li className="breadcrumb-item active" aria-current="page">{post_title}</li>
            </ol>
        </nav>
    </div>
);