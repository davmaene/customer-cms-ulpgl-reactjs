import React, { useState } from "react";
import { Colors } from "../../utils/utils.colors";
import { domainsData } from "../../utils/utils.statiquedata";

export const DashboardDomaines: React.FC = () => {
  const [expandedDomain, setExpandedDomain] = useState<number | null>(null);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h4 className="mb-0" style={{ color: Colors.darkColor }}>
          Domaines & Facultés
        </h4>
        <div className="d-flex gap-2">
          <span className="badge bg-primary" style={{ fontSize: "0.85rem" }}>
            {domainsData.length} domaines
          </span>
          <span className="badge bg-info" style={{ fontSize: "0.85rem" }}>
            {domainsData.reduce((acc, d) => acc + d.faculties.length, 0)} facultés
          </span>
          <span className="badge bg-secondary" style={{ fontSize: "0.85rem" }}>
            {domainsData.reduce(
              (acc, d) => acc + d.faculties.reduce((a, f) => a + f.filiaires.length, 0), 0
            )} filières
          </span>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        {domainsData.map((domain, domainIdx) => {
          const isExpanded = expandedDomain === domainIdx;
          const totalFilieres = domain.faculties.reduce(
            (a, f) => a + f.filiaires.length, 0
          );

          return (
            <div key={domainIdx} className="dashboard-card">
              <div
                className="d-flex justify-content-between align-items-center"
                onClick={() => setExpandedDomain(isExpanded ? null : domainIdx)}
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="dashboard-domain-indicator"
                    style={{ backgroundColor: Colors.primaryColor }}
                  />
                  <div>
                    <h6 className="mb-0">{domain.domaine}</h6>
                    <small className="text-muted">
                      {domain.faculties.length} faculté(s) - {totalFilieres} filière(s)
                    </small>
                  </div>
                </div>
                <span
                  className="dashboard-expand-icon"
                  style={{ transform: isExpanded ? "rotate(180deg)" : "none" }}
                >
                  &#9660;
                </span>
              </div>

              {isExpanded && (
                <div className="mt-3">
                  {domain.faculties.map((faculty, facIdx) => (
                    <div key={facIdx} className="dashboard-faculty-block">
                      <h6 className="text-primary mb-3" style={{ fontSize: "0.95rem" }}>
                        {faculty.faculte}
                      </h6>
                      <div className="table-responsive">
                        <table className="table table-sm dashboard-table">
                          <thead>
                            <tr>
                              <th>Filière</th>
                              <th>Responsable</th>
                              <th>Secrétaire facultaire</th>
                            </tr>
                          </thead>
                          <tbody>
                            {faculty.filiaires.map((filiere, filIdx) => (
                              <tr key={filIdx}>
                                <td className="fw-medium">{filiere.filiere}</td>
                                <td>
                                  <div>{filiere.responsable.name}</div>
                                  <small className="text-muted">{filiere.responsable.role}</small>
                                </td>
                                <td>
                                  <div>{filiere.saf.name}</div>
                                  <small className="text-muted">{filiere.saf.role}</small>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
