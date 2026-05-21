import React, { useEffect, useState } from "react";
import { BreadcrumpComponent } from "../components/subcomponents/BreadcrumpCompont";
import { useParams, Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import heroImage from "../assets/images/hero-image.png";
import { apiGet } from "../utils/api";
import { Colors } from "../utils/utils.colors";
import { routes } from "../utils/utils.routes";
import { LoadingComponent } from "../components/subcomponents/LoadingComponent";

const TYPE_LABELS: any = {
  article: "Articles",
  evenement: "Événements",
  event: "Événements",
  activite: "Activités",
  activity: "Activités",
};

const typeFromParam = (cat?: string) => {
  if (!cat) return undefined;
  if (cat === "evenement") return "event";
  if (cat === "activite") return "activity";
  if (cat === "article") return "article";
  return undefined;
};

export const Articles: React.FC = () => {
  const { category } = useParams();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    setLoading(true);
    apiGet("/contents", { type: typeFromParam(category), limit: 100 })
      .then((d) => setItems(d.items || []))
      .finally(() => setLoading(false));
  }, [category]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % Math.max(items.length, 1);
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  const headingLabel = category ? TYPE_LABELS[category] || "Articles" : "Articles et nouvelles";

  return (
    <>
      <BreadcrumpComponent
        title={`${headingLabel} et dernières nouvelles`}
        subtitle="Restez informé des dernières nouvelles, événements et histoires inspirantes de notre communauté à travers nos articles et mises à jour régulières."
        imageCover={heroImage}
      />
      <div className="wp-block-group has-global-padding is-layout-constrained" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <div className="wp-block-columns is-layout-flex">
          <div className="wp-block-column" style={{ flexBasis: "50%" }}>
            <h2 className="has-text-align-left has-primary-color has-text-color has-max-48-font-size wp-block-heading">{headingLabel}</h2>
            <p className="has-tertiary-color has-text-color">
              Découvrez toutes nos actualités, publications et événements récents publiés directement par les facultés et validés par notre rédaction.
            </p>
          </div>
        </div>

        <div style={{ height: "8px" }} aria-hidden="true" className="wp-block-spacer"></div>

        {loading ? (
          <LoadingComponent />
        ) : currentItems.length === 0 ? (
          <p style={{ color: "#888", textAlign: "center", padding: "40px 0" }}>Aucun contenu disponible pour le moment.</p>
        ) : (
          <div data-testid="articles-grid" className="row g-4 list-unstyled">
            {currentItems.map((p) => (
              <div key={p.id} className="col-md-6 col-lg-4">
                <Link
                  data-testid={`article-card-${p.slug}`}
                  to={`${routes.ARTICLESDETAILS}/${p.slug}`}
                  style={{ display: "block", background: "white", borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 14px rgba(0,0,0,0.07)", textDecoration: "none", color: "inherit", height: "100%" }}
                >
                  <div style={{ height: 200, background: `url(${p.coverImage || heroImage}) center / cover`, position: "relative" }}>
                    <span style={{ position: "absolute", top: 12, left: 12, background: Colors.primaryColor, color: "white", padding: "4px 12px", borderRadius: 4, fontSize: 11, textTransform: "uppercase", fontWeight: 600 }}>
                      {p.type === "event" ? "Événement" : p.type === "activity" ? "Activité" : "Article"}
                    </span>
                  </div>
                  <div style={{ padding: 18 }}>
                    <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>
                      {new Date(p.publishedAt || p.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                    </div>
                    <h4 style={{ color: Colors.darkColor, fontSize: 17, lineHeight: 1.4, marginBottom: 8 }}>{p.title}</h4>
                    <p style={{ color: "#666", fontSize: 14, margin: 0 }}>{(p.excerpt || "").slice(0, 110)}...</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        {pageCount > 1 && (
          <div className="d-flex justify-content-center mt-5">
            <ReactPaginate
              breakLabel="..."
              nextLabel="Suivant >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="< Précédent"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              activeClassName="active"
            />
          </div>
        )}
      </div>
    </>
  );
};
