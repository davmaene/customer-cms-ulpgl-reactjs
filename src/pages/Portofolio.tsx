import React from "react";
import { BreadcrumbArticle } from "../components/subcomponents/BreadcrumpArticle";
import { SocialShare } from "../components/subcomponents/Sharesocial";
import { truncateText } from "../utils/utils.fucntions";

export const Portofolio: React.FC = () => {
    const [articleItem, setArticle] = React.useState<Post>();

    return (
        <div className="container py-5">
            {/* Header de l'article */}
            <header className="mb-5">
                <BreadcrumbArticle
                    category={articleItem?.post_category ?? ""}
                    post_title={truncateText(articleItem?.post_title ?? "", 50)}
                />
                <h1 className="display-5 fw-bold">{articleItem?.post_title ?? ""}</h1>

                <div className="post-meta d-flex align-items-center text-muted small mt-3">
                    <span>{articleItem?.post_author ?? ""}</span>
                    <span className="mx-2">·</span>
                    <span className="text-primary text-uppercase fw-bold">{articleItem?.post_category ?? ""}</span>
                    <span className="mx-2">·</span>
                    <time dateTime={articleItem?.post_date_gmt ?? ""}>{articleItem?.post_date ?? ""}</time>
                </div>
                <hr className="my-4" style={{ opacity: 0.1 }} />
            </header>

            <div className="row">
                <aside className="col-md-4 pe-md-5">
                    {/* <SocialShare
                        post_name={link ?? ""}
                    /> */}

                    {/* <div className="mt-5 pt-5">
                        <h2 className="h4 fw-bold mb-3">Autres catégories</h2>
                        <hr className="mb-3" />
                        <ul className="list-unstyled">
                            {categoriesArticles.map((category, idx) => (
                                <li key={idx} className="mb-2"><a href={category.href} className="text-decoration-none text-dark">{category.name}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-5">
                        <h2 className="h4 fw-bold mb-3">Tags</h2>
                        <div className="d-flex flex-wrap gap-2">
                            <span className="badge border text-secondary fw-normal">design</span>
                            <span className="badge border text-secondary fw-normal">interior</span>
                            <span className="badge border text-secondary fw-normal">minimal</span>
                        </div>
                    </div> */}
                </aside>

                {/* <main className="col-md-8">
                    <article className="entry-content">
                        <div
                            className="prose lead-"
                            dangerouslySetInnerHTML={{ __html: articleItem?.post_content ?? "" }}
                        />

                        <div className="row g-3 my-4">
                            <div className="col-6 col-md-4">
                                <img src="https://via.placeholder.com/400x300" className="img-fluid rounded" alt="Gallery" />
                            </div>
                            <div className="col-6 col-md-4">
                                <img src="https://via.placeholder.com/400x300" className="img-fluid rounded" alt="Gallery" />
                            </div>
                            <div className="col-6 col-md-4">
                                <img src="https://via.placeholder.com/400x300" className="img-fluid rounded" alt="Gallery" />
                            </div>
                        </div>
                    </article>
                </main> */}
            </div>
        </div>
    );
}