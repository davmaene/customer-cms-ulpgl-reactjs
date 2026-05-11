import React from 'react';

export const VisionValues: React.FC = () => {
    return (
        <div
            id="vison-values"
            className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
        >
            <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
                <div
                    style={{ height: '100px' }}
                    aria-hidden="true"
                    className="wp-block-spacer"
                ></div>

                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">

                    {/* --- Section Vision --- */}
                    <div
                        className="wp-block-column is-style-default is-layout-flow wp-block-column-is-layout-flow"
                        style={{
                            borderStyle: 'none',
                            borderWidth: '0px',
                            padding: 0,
                        }}
                    >
                        <div
                            className="wp-block-cover is-style-round-corners"
                            style={{
                                paddingTop: 'var(--wp--preset--spacing--small)',
                                paddingRight: 'var(--wp--preset--spacing--small)',
                                paddingBottom: 'var(--wp--preset--spacing--x-small)',
                                paddingLeft: 'var(--wp--preset--spacing--small)',
                                minHeight: '760px',
                                aspectRatio: 'unset',
                            }}
                        >
                            <span
                                aria-hidden="true"
                                className="wp-block-cover__background has-background-dim-90 has-background-dim wp-block-cover__gradient-background has-background-gradient has-black-primary-gradient-background"
                            ></span>
                            <img
                                className="wp-block-cover__image-background wp-image-6770"
                                alt="Our Vision"
                                src="https://wpzoom.s3.us-east-1.amazonaws.com/elementor/templates/assets/thumbs/edublock-pro/pexels-kampus-production-5940832.jpg"
                                style={{ objectFit: 'cover' }}
                                loading="lazy"
                            />
                            <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                                <div
                                    style={{ height: '495px' }}
                                    aria-hidden="true"
                                    className="wp-block-spacer"
                                ></div>
                                <h2 className="wp-block-heading has-text-align-left has-white-color has-text-color has-link-color has-max-48-font-size">
                                    Our vision
                                </h2>
                                <p className="has-lightgrey-color has-text-color">
                                    This is some dummy copy. You’re not really supposed to read
                                    this dummy copy, it is just a place holder for people.
                                </p>
                                <p>
                                    <a href="#">Learn more →</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- Section Values --- */}
                    <div
                        className="wp-block-column is-style-default is-layout-flow wp-block-column-is-layout-flow"
                        style={{
                            borderStyle: 'none',
                            borderWidth: '0px',
                            padding: 0,
                        }}
                    >
                        <div
                            className="wp-block-cover is-style-round-corners"
                            style={{
                                paddingTop: 'var(--wp--preset--spacing--small)',
                                paddingRight: 'var(--wp--preset--spacing--small)',
                                paddingBottom: 'var(--wp--preset--spacing--x-small)',
                                paddingLeft: 'var(--wp--preset--spacing--small)',
                                minHeight: '760px',
                                aspectRatio: 'unset',
                            }}
                        >
                            <span
                                aria-hidden="true"
                                className="wp-block-cover__background has-background-dim-90 has-background-dim wp-block-cover__gradient-background has-background-gradient has-black-primary-gradient-background"
                            ></span>
                            <img
                                className="wp-block-cover__image-background wp-image-6822"
                                alt="Our Values"
                                src="https://wpzoom.s3.us-east-1.amazonaws.com/elementor/templates/assets/thumbs/edublock-pro/92.png"
                                style={{ objectFit: 'cover' }}
                                loading="lazy"
                            />
                            <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                                <div
                                    style={{ height: '495px' }}
                                    aria-hidden="true"
                                    className="wp-block-spacer"
                                ></div>
                                <h2 className="wp-block-heading has-text-align-left has-white-color has-text-color has-link-color has-max-48-font-size">
                                    Our values
                                </h2>
                                <p className="has-lightgrey-color has-text-color">
                                    This is some dummy copy. You’re not really supposed to read
                                    this dummy copy, it is just a place holder for people.
                                </p>
                                <p>
                                    <a href="#">Learn more →</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};