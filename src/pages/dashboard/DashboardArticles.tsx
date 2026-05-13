import React, { useState } from "react";
import { Colors } from "../../utils/utils.colors";
import { posts } from "../../utils/utils.statiquedata";
import { truncateText } from "../../utils/utils.fucntions";

export const DashboardArticles: React.FC = () => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const categories = Array.from(new Set(posts.map((p) => p.post_category)));

  const filtered = posts.filter((post) => {
    const matchSearch =
      post.post_title.toLowerCase().includes(search.toLowerCase()) ||
      post.post_author.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !categoryFilter || post.post_category === categoryFilter;
    return matchSearch && matchCategory;
  });

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h4 className="mb-0" style={{ color: Colors.darkColor }}>
          Gestion des Articles
        </h4>
        <span className="badge bg-primary" style={{ fontSize: "0.85rem" }}>
          {posts.length} articles
        </span>
      </div>

      <div className="dashboard-card mb-4">
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher par titre ou auteur..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">Toutes les catégories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="table-responsive">
          <table className="table table-hover dashboard-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Titre</th>
                <th>Auteur</th>
                <th>Catégorie</th>
                <th>Date</th>
                <th>Statut</th>
                <th>Commentaires</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center text-muted py-4">
                    Aucun article trouvé
                  </td>
                </tr>
              ) : (
                filtered.map((post, idx) => (
                  <tr key={post.id + "-" + idx}>
                    <td>{post.id}</td>
                    <td className="fw-medium">{truncateText(post.post_title, 45)}</td>
                    <td>{post.post_author}</td>
                    <td>
                      <span className="badge bg-primary bg-opacity-10 text-primary">
                        {post.post_category}
                      </span>
                    </td>
                    <td className="text-muted text-nowrap">
                      {new Date(post.post_date).toLocaleDateString("fr-FR")}
                    </td>
                    <td>
                      <span className={`badge ${post.post_status === "publish" ? "bg-success" : "bg-warning"} bg-opacity-10 ${post.post_status === "publish" ? "text-success" : "text-warning"}`}>
                        {post.post_status === "publish" ? "Publié" : "Brouillon"}
                      </span>
                    </td>
                    <td className="text-center">{post.comment_count ?? 0}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
