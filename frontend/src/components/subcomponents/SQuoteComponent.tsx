import React from 'react';

export const QuoteSection: React.FC = () => {
    return (
        <div
            id="quote"
            className="wp-block-group alignfull is-style-default has-light-background-background-color has-background is-layout-flow wp-block-group-is-layout-flow"
            style={{
                paddingTop: '60px',
                paddingBottom: '60px',
                paddingLeft: 0,
            }}
        >
            <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                <div
                    className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-d7d455e7 wp-block-columns-is-layout-flex"
                    style={{ padding: 0 }}
                >
                    {/* Colonne latérale vide (Spacer) */}
                    <div
                        className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: '15%' }}
                    ></div>

                    {/* Colonne centrale de contenu */}
                    <div
                        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                        style={{
                            paddingLeft: 'var(--wp--preset--spacing--80)',
                            flexBasis: '70%',
                        }}
                    >
                        {/* Barre décorative supérieure */}
                        <div className="wp-block-outermost-icon-block items-justified-center">
                            <div
                                className="icon-container"
                                style={{
                                    width: '10px',
                                    transform: 'rotate(0deg) scaleX(1) scaleY(1)',
                                }}
                            >
                                <svg
                                    width="8"
                                    height="55"
                                    viewBox="0 0 8 55"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="8"
                                        width="55"
                                        height="8"
                                        transform="rotate(90 8 0)"
                                        fill="var(--wp--preset--color--secondary)"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div
                            style={{ height: '40px' }}
                            aria-hidden="true"
                            className="wp-block-spacer"
                        ></div>

                        {/* Icône de Guillemets */}
                        <div className="wp-block-outermost-icon-block items-justified-center">
                            <div
                                className="icon-container"
                                style={{
                                    width: '48px',
                                    transform: 'rotate(0deg) scaleX(1) scaleY(1)',
                                }}
                            >
                                <svg
                                    width="72"
                                    height="48"
                                    viewBox="0 0 72 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        opacity="0.3"
                                        d="M54.48 40H57.52L64 27.04V8H48V24H62.48L54.48 40ZM14.48 40H17.52L24 27.04V8H8V24H22.48L14.48 40Z"
                                        fill="var(--wp--preset--color--secondary)"
                                    />
                                    <path
                                        d="M62.48 48L72 28.96V0H40V32H49.52L41.52 48H62.48ZM48 24V8H64V27.04L57.52 40H54.48L62.48 24H48ZM1.52 48H22.48L32 28.96V0H0V32H9.52L1.52 48ZM8 24V8H24V27.04L17.52 40H14.48L22.48 24H8Z"
                                        fill="var(--wp--preset--color--secondary)"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div
                            style={{ height: '60px' }}
                            aria-hidden="true"
                            className="wp-block-spacer"
                        ></div>

                        {/* Texte de la Citation */}
                        <h2 className="wp-block-heading has-text-align-center has-primary-color has-text-color has-max-48-font-size">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </h2>

                        <div
                            style={{ height: '60px' }}
                            aria-hidden="true"
                            className="wp-block-spacer"
                        ></div>

                        {/* Auteur */}
                        <h4 className="wp-block-heading has-text-align-center has-header-footer-color has-text-color">
                            Eva Lester
                        </h4>

                        <p className="has-text-align-center has-tertiary-color has-text-color">
                            Student Affairs Operations Administrator
                        </p>

                        <div
                            style={{ height: '40px' }}
                            aria-hidden="true"
                            className="wp-block-spacer"
                        ></div>

                        {/* Barre décorative inférieure */}
                        <div className="wp-block-outermost-icon-block items-justified-center">
                            <div
                                className="icon-container"
                                style={{
                                    width: '10px',
                                    transform: 'rotate(0deg) scaleX(1) scaleY(1)',
                                }}
                            >
                                <svg
                                    width="8"
                                    height="55"
                                    viewBox="0 0 8 55"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="8"
                                        width="55"
                                        height="8"
                                        transform="rotate(90 8 0)"
                                        fill="var(--wp--preset--color--secondary)"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Colonne latérale vide (Spacer) */}
                    <div
                        className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: '15%' }}
                    ></div>
                </div>
            </div>
        </div>
    );
};