import React from "react";

export const Skeleton: React.FC = () => {
    return (
        <div className="skeleton-wrapper">
            
            <div className="skeleton top-bar"></div>
            <div className="header-skeleton">
                <div className="skeleton logo"></div>
                <div className="skeleton title"></div>

                <div className="contact-row">
                    <div className="skeleton contact"></div>
                    <div className="skeleton contact"></div>
                    <div className="skeleton contact"></div>
                </div>

                <div className="search-row">
                    <div className="skeleton search"></div>
                </div>
            </div>

            <div className="menu-skeleton">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="skeleton menu-item"></div>
                ))}
            </div>

            <div className="skeleton hero"></div>

            <div className="content-skeleton">
                <div className="skeleton line big"></div>
                <div className="skeleton line"></div>
                <div className="skeleton line"></div>
                <div className="skeleton line small"></div>

                <div className="skeleton btn-skeleton"></div>
            </div>

        </div>
    );
}