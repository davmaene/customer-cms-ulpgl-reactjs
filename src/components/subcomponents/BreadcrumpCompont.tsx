import React from 'react';

export const BreadcrumpComponent: React.FC<{ title: React.ReactNode | string, subtitle: React.ReactNode | string, imageCover: string }> = ({ title, subtitle, imageCover }) => {
    return (
        <main className="wp-block-group alignfull site-content has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" id="page-title" style={{ marginTop: 0 }}>
            <div className="wp-block-cover alignfull">
                <img
                    decoding="async"
                    className="wp-block-cover__image-background wp-image-6813"
                    alt={title + " cover image"}
                    src={imageCover}
                    style={{ objectFit: 'cover' }}
                />
                <span aria-hidden="true" className="wp-block-cover__background has-background-dim-80 has-background-dim wp-block-cover__gradient-background has-background-gradient has-black-primary-gradient-background"></span>
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                    <div className="wp-block-group is-style-default has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                        <div style={{ height: '153px' }} aria-hidden="true" className="wp-block-spacer"></div>

                        <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '100%' }}>
                                <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                    <h1 className="wp-block-heading has-white-color has-text-color">{title}</h1>
                                </div>
                            </div>

                            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '100%' }}>
                                <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                    <div style={{ height: '50px' }} aria-hidden="true" className="wp-block-spacer"></div>
                                    <p className="has-white-color has-text-color">{subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};