import React, { useEffect, useState } from "react";
import { BreadcrumbArticle } from "../components/subcomponents/BreadcrumpArticle";
import { useParams } from "react-router-dom";
import { SocialShare } from "../components/subcomponents/Sharesocial";
import { categoriesArticles } from "../utils/utils.statiquedata";
import { truncateText } from "../utils/utils.fucntions";
import { NotFound } from "./NotFound";
import { LoadingComponent } from "../components/subcomponents/LoadingComponent";
import { apiGet } from "../utils/api";

export const ArticleDerails: React.FC = () => {
  const { article } = useParams();
  const [item, setItem] = useState<any | null>(undefined as any);

  useEffect(() => {
    if (!article) return;
    apiGet(`/contents/slug/${article}`)
      .then((d) => setItem(d.item))
      .catch(() => setItem(null));
  }, [article]);

  if (item === undefined) return <LoadingComponent />;
  if (item === null) return <NotFound />;

  return (
    <div className="container py-5" data-testid="article-detail">
      <header className="mb-5">
        <BreadcrumbArticle category={item.category ?? item.type} post_title={truncateText(item.title ?? "", 50)} />
        <h1 className="display-5 fw-bold">{item.title}</h1>
        <div className="post-meta d-flex align-items-center text-muted small mt-3 flex-wrap">
          <span>{item.author?.name || "ULPGL"}</span>
          <span className="mx-2">·</span>
          <span className="text-primary text-uppercase fw-bold">{item.category || item.type}</span>
          <span className="mx-2">·</span>
          <time dateTime={item.publishedAt}>{new Date(item.publishedAt || item.createdAt).toLocaleDateString("fr-FR")}</time>
          {item.location && (
            <>
              <span className="mx-2">·</span>
              <span>📍 {item.location}</span>
            </>
          )}
        </div>
        <hr className="my-4" style={{ opacity: 0.1 }} />
      </header>

      <div className="row">
        <aside className="col-md-4 pe-md-5">
          <SocialShare post_name={article ?? ""} />
          <div className="mt-5 pt-5">
            <h2 className="h4 fw-bold mb-3">Autres catégories</h2>
            <hr className="mb-3" />
            <ul className="list-unstyled">
              {categoriesArticles.map((category, idx) => (
                <li key={idx} className="mb-2">
                  <a href={category.href} className="text-decoration-none text-dark">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="col-md-8">
          <article className="entry-content">
            {item.coverImage && <img src={item.coverImage} alt="" style={{ borderRadius: 10, marginBottom: 30, width: "100%" }} />}
            {item.excerpt && <p className="lead text-muted">{item.excerpt}</p>}
            <div className="prose" dangerouslySetInnerHTML={{ __html: item.content || "" }} />
          </article>
        </main>
      </div>
    </div>
  );
};
