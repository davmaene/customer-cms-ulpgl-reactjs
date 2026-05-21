import React from "react";

import { Link } from "react-router-dom";
import NotFoundSvg from "../assets/images/undraw_page-not-found_6wni.svg";

export const NotFound = () => {
    return (
        <div style={{ textAlign: "center", padding: "150px" }}>
            <div className="d-flex justify-content-center">
                <img
                    src={NotFoundSvg}
                    alt="Not Found"
                    style={{ maxWidth: "300px", height: "auto" }}
                />
            </div>
            <p className="has-tertiary-color has-text-color has-max-36-font-size pt-4">Page non trouvée</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
};