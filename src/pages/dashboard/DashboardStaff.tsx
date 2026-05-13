import React, { useState } from "react";
import { Colors } from "../../utils/utils.colors";
import { staffMembers } from "../../utils/utils.statiquedata";

export const DashboardStaff: React.FC = () => {
  const [search, setSearch] = useState("");

  const filtered = staffMembers.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase()) ||
    member.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h4 className="mb-0" style={{ color: Colors.darkColor }}>
          Gestion du Personnel
        </h4>
        <span className="badge bg-success" style={{ fontSize: "0.85rem" }}>
          {staffMembers.length} membres
        </span>
      </div>

      <div className="dashboard-card mb-4">
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher par nom ou rôle..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="dashboard-staff-grid">
        {filtered.length === 0 ? (
          <div className="dashboard-card text-center text-muted py-4">
            Aucun membre trouvé
          </div>
        ) : (
          filtered.map((member, idx) => (
            <div key={member.uuid + "-" + idx} className="dashboard-card dashboard-staff-card">
              <div className="d-flex align-items-start gap-3">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="dashboard-staff-avatar"
                  />
                ) : (
                  <div className="dashboard-staff-avatar-placeholder">
                    {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                )}
                <div className="flex-grow-1">
                  <h6 className="mb-1">{member.name}</h6>
                  <span className="badge bg-primary bg-opacity-10 text-primary mb-2">
                    {member.role}
                  </span>
                  {member.description && (
                    <p className="text-muted small mb-2">{member.description}</p>
                  )}
                  <div className="d-flex flex-column gap-1">
                    {member.email?.map((email, i) => (
                      <small key={i} className="text-muted">
                        {email}
                      </small>
                    ))}
                    {member.phone?.map((phone, i) => (
                      <small key={i} className="text-muted">
                        {phone}
                      </small>
                    ))}
                  </div>
                  {member.isOrganizer && (
                    <span className="badge bg-warning bg-opacity-10 text-warning mt-2">
                      Organisateur
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
