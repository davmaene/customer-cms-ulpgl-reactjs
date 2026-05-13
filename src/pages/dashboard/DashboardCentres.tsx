import React, { useState } from "react";
import { Colors } from "../../utils/utils.colors";
import { centers } from "../../utils/utils.statiquedata";
import { truncateText } from "../../utils/utils.fucntions";

export const DashboardCentres: React.FC = () => {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = centers.filter((center) =>
    center.title.toLowerCase().includes(search.toLowerCase()) ||
    center.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h4 className="mb-0" style={{ color: Colors.darkColor }}>
          Gestion des Centres
        </h4>
        <span className="badge bg-warning text-dark" style={{ fontSize: "0.85rem" }}>
          {centers.length} centres
        </span>
      </div>

      <div className="dashboard-card mb-4">
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher un centre..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        {filtered.length === 0 ? (
          <div className="dashboard-card text-center text-muted py-4">
            Aucun centre trouvé
          </div>
        ) : (
          filtered.map((center) => {
            const isExpanded = expandedId === center.flug;
            return (
              <div key={center.flug} className="dashboard-card">
                <div
                  className="d-flex justify-content-between align-items-start cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : center.flug)}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <h6 className="mb-1">{center.title}</h6>
                    <p className="text-muted small mb-0">
                      {isExpanded ? center.description : truncateText(center.description, 120)}
                    </p>
                  </div>
                  <span className="badge bg-secondary bg-opacity-10 text-secondary text-nowrap ms-3">
                    {center.domaineInterventions.length} domaines
                  </span>
                </div>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-top">
                    {center.direction && (
                      <div className="mb-3">
                        <strong className="small">Direction :</strong>
                        <div className="text-muted small">
                          {center.direction.name} - {center.direction.role}
                        </div>
                      </div>
                    )}
                    <div className="mb-3">
                      <strong className="small">Domaines d'intervention :</strong>
                      <div className="d-flex flex-wrap gap-1 mt-1">
                        {center.domaineInterventions.map((d, i) => (
                          <span key={i} className="badge bg-primary bg-opacity-10 text-primary">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    {center.partenaires && center.partenaires.length > 0 && (
                      <div className="mb-3">
                        <strong className="small">Partenaires :</strong>
                        <div className="d-flex flex-wrap gap-1 mt-1">
                          {center.partenaires.map((p, i) => (
                            <span key={i} className="badge bg-info bg-opacity-10 text-info">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {center.contacts && center.contacts.length > 0 && (
                      <div>
                        <strong className="small">Contacts :</strong>
                        <div className="text-muted small">
                          {center.contacts.join(" | ")}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
