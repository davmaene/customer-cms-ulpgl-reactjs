import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { apiGet } from "../utils/api";
import { Colors } from "../utils/utils.colors";
import { routes } from "../utils/utils.routes";
import { BreadcrumpComponent } from "../components/subcomponents/BreadcrumpCompont";
import bigCover from "../assets/images/big-cover.jpg";
import { FaSearch } from "react-icons/fa";

const SearchI = FaSearch as any;

export const Search: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const [query, setQuery] = useState(q);
  const [results, setResults] = useState<any>({ contents: [], faculties: [], filieres: [] });
  const [loading, setLoading] = useState(false);

  const runSearch = (text: string) => {
    if (!text.trim()) {
      setResults({ contents: [], faculties: [], filieres: [] });
      return;
    }
    setLoading(true);
    apiGet("/search", { q: text }).then(setResults).finally(() => setLoading(false));
  };

  useEffect(() => {
    runSearch(q);
  }, [q]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setParams({ q: query });
  };

  const total = results.contents.length + results.faculties.length + results.filieres.length;

  return (
    <>
      <BreadcrumpComponent imageCover={bigCover} title="Recherche" subtitle="Trouvez articles, événements, activités, facultés et filières en quelques secondes." />
      <div className="wp-block-group has-global-padding is-layout-constrained" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <form data-testid="search-form" onSubmit={handleSubmit} style={{ display: "flex", gap: 0, maxWidth: 720, margin: "0 auto 30px", borderRadius: 8, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
          <input
            data-testid="search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un événement, une faculté, une filière, un article..."
            style={{ flex: 1, padding: "16px 22px", border: "none", outline: "none", fontSize: 16 }}
          />
          <button type="submit" data-testid="search-button" style={{ background: Colors.primaryColor, color: "white", border: "none", padding: "0 28px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, fontSize: 16 }}>
            <SearchI /> Rechercher
          </button>
        </form>

        {q && (
          <p style={{ textAlign: "center", color: "#666" }}>
            {loading ? "Recherche en cours..." : <><b>{total}</b> résultat(s) pour <b>«&nbsp;{q}&nbsp;»</b></>}
          </p>
        )}

        {results.faculties.length > 0 && (
          <section style={{ marginTop: 30 }}>
            <h3 style={{ color: Colors.primaryColor, borderBottom: `2px solid ${Colors.primaryColor}`, paddingBottom: 10 }}>
              Facultés ({results.faculties.length})
            </h3>
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginTop: 16 }}>
              {results.faculties.map((f: any) => (
                <Link key={f.id} to={`${routes.FACULTIES}/${f.slug}`} data-testid={`result-faculty-${f.slug}`} style={{ background: "white", padding: 18, borderRadius: 8, textDecoration: "none", color: "inherit", borderLeft: `4px solid ${Colors.primaryColor}`, boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
                  <strong>{f.name}</strong>
                  <div style={{ fontSize: 13, color: "#666", marginTop: 4 }}>{f.domaine}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {results.filieres.length > 0 && (
          <section style={{ marginTop: 30 }}>
            <h3 style={{ color: Colors.primaryColor, borderBottom: `2px solid ${Colors.primaryColor}`, paddingBottom: 10 }}>
              Filières ({results.filieres.length})
            </h3>
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginTop: 16 }}>
              {results.filieres.map((fi: any) => (
                <Link key={fi.id} to={`${routes.FACULTIES}/${fi.faculty?.slug}`} data-testid={`result-filiere-${fi.slug}`} style={{ background: "white", padding: 18, borderRadius: 8, textDecoration: "none", color: "inherit", borderLeft: `4px solid ${Colors.redColor}`, boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
                  <strong>{fi.name}</strong>
                  <div style={{ fontSize: 13, color: "#666", marginTop: 4 }}>{fi.faculty?.name}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {results.contents.length > 0 && (
          <section style={{ marginTop: 30 }}>
            <h3 style={{ color: Colors.primaryColor, borderBottom: `2px solid ${Colors.primaryColor}`, paddingBottom: 10 }}>
              Articles, événements et activités ({results.contents.length})
            </h3>
            <div style={{ display: "grid", gap: 14, marginTop: 16 }}>
              {results.contents.map((c: any) => (
                <Link key={c.id} to={`${routes.ARTICLESDETAILS}/${c.slug}`} data-testid={`result-content-${c.slug}`} style={{ display: "flex", gap: 16, background: "white", padding: 16, borderRadius: 8, textDecoration: "none", color: "inherit", boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
                  {c.coverImage && <img src={c.coverImage} alt="" style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 6 }} />}
                  <div style={{ flex: 1 }}>
                    <span style={{ background: Colors.darkColor, color: "white", padding: "2px 8px", borderRadius: 4, fontSize: 11, textTransform: "uppercase" }}>{c.type}</span>
                    <h5 style={{ color: Colors.darkColor, margin: "8px 0 4px" }}>{c.title}</h5>
                    <p style={{ fontSize: 13, color: "#666", margin: 0 }}>{(c.excerpt || "").slice(0, 160)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {q && !loading && total === 0 && (
          <p style={{ textAlign: "center", color: "#888", marginTop: 30 }}>Aucun résultat trouvé.</p>
        )}
      </div>
    </>
  );
};
