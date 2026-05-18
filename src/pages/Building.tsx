import React from "react";

import { Link, NavLink } from "react-router-dom";
import NotFoundSvg from "../assets/images/undraw_online-community_3o0l.svg";
import { IoIosArrowForward } from "react-icons/io";
import { routes } from "../utils/utils.routes";

const ArrowForward = IoIosArrowForward as any;


export const Building = () => {
    return (
        <div style={{ textAlign: "center", padding: "150px" }}>
            <div className="d-flex justify-content-center">
                <img
                    src={NotFoundSvg}
                    alt="Not Found"
                    style={{ maxWidth: "300px", height: "auto" }}
                />
            </div>
            <p className="has-tertiary-color has-text-color has-max-36-font-size pt-4">Page temporairement indisponible</p>
            <span>La page que vous essayez de visiter est temporairement indisponible <br /> nous vous la présenterons une fois qu'elle est prête</span>
            <div className="w-100" style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                <div className="wp-block-button- wpz-alt-button w-25" style={{ alignSelf: "center", justifyContent: "center" }}>
                    <NavLink className="wp-block-button__link wp-element-button w-100" to={routes.HOME}>
                        En savoir plus
                    </NavLink>
                </div>
            </div>
        </div>
    );
};