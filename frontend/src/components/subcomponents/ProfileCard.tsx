import React from "react"
import { Link } from "react-router-dom"
import { routes } from "../../utils/utils.routes"

export const ProfileCard: React.FC<{ profile: StaffMember, showDescription?: boolean }> = ({ profile: { name, role, slug, uuid, description, image }, showDescription }) => {
    return (
        <React.Fragment key={uuid}>
            <div
                className="wp-block-column is-style-default is-layout-flow wp-block-column-is-layout-flow"
                style={{ borderStyle: 'none', borderWidth: '0px', padding: 0 }}
            >
                <figure
                    className="wp-block-image size-full is-resized shadow"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",           // Centre la figure elle-même dans son parent
                        width: "fit-content",       // Ou une largeur fixe si tu veux
                        borderRadius: "8px",
                        overflow: "hidden",
                        marginBottom: 15         // Pour que le border-radius s'applique bien
                    }}
                >
                    <img
                        className="wp-block-image__img"
                        style={{
                            borderRadius: "10px",
                            padding: "2px",
                            display: "block",       // Important pour les images
                            maxWidth: "100%",
                            height: "auto",
                        }}
                        src={image}
                        alt={`Image - ${name}`}
                        loading="lazy"
                    />
                </figure>
                <Link to={routes.PROFILE.concat("/").concat(slug)} className="text-wrapper">
                    <h4 className="wp-block-heading has-primary-color has-text-color text-align-center text-center text-capitalize" style={{ textTransform: 'capitalize' }}>
                        {name}
                    </h4>
                </Link>
                <div style={{ height: '10px' }} aria-hidden="true" className="wp-block-spacer"></div>
                <p className="has-tertiary-color has-text-color text-center">{role}</p>

                {showDescription && (
                    <p className="has-header-footer-color has-text-color text-center">
                        {description}
                    </p>
                )}
            </div>
        </React.Fragment>
    )
}