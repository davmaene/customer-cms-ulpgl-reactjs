import React from 'react';
import { ButtonAll } from './subcomponents/ButtonAll';

export const History: React.FC = () => {
    return (
        <div
            id="history"
            className="wp-block-group is-style-default is-layout-flow wp-block-group-is-layout-flow"
            style={{
                paddingTop: 'var(--wp--preset--spacing--80)',
                paddingBottom: 'var(--wp--preset--spacing--80)',
            }}
        >
            <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                <div
                    style={{ height: '60px' }}
                    aria-hidden="true"
                    className="wp-block-spacer"
                ></div>

                <div
                    className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-d7d455e7 wp-block-columns-is-layout-flex"
                    style={{ padding: 0 }}
                >
                    <div
                        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                        style={{
                            paddingRight: 'var(--wp--preset--spacing--80)',
                            flexBasis: '50%',
                        }}
                    >
                        <h2 className="wp-block-heading has-primary-color has-text-color has-max-48-font-size">
                            Notre histoire
                        </h2>

                        <p className="has-tertiary-color has-text-color">
                            This is some dummy copy. You’re not really supposed to read this
                            dummy copy, it is just a place holder for people.
                        </p>
                    </div>

                    <div
                        className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: '50%' }}
                    ></div>
                </div>

                <div
                    style={{ height: '100px' }}
                    aria-hidden="true"
                    className="wp-block-spacer"
                ></div>

                {/* --- Événement 1889 --- */}
                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                    <div
                        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                        style={{ padding: 0, flexBasis: '2%' }}
                    >
                        <div className="wp-block-outermost-icon-block">
                            <div
                                className="icon-container"
                                style={{
                                    width: '48px',
                                    transform: 'rotate(0deg) scaleX(1) scaleY(1)',
                                }}
                            >
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="10.5"
                                        cy="10.5"
                                        r="9"
                                        fill="var(--wp--preset--color--primary)"
                                        stroke="#ECECEC"
                                        strokeWidth="3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div
                        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: '50%' }}
                    >
                        <h4 className="wp-block-heading has-primary-color has-text-color">
                            1889
                        </h4>
                        <div
                            style={{ height: '30px' }}
                            aria-hidden="true"
                            className="wp-block-spacer"
                        ></div>
                        <figure className="wp-block-image size-full has-custom-border is-style-rounded">
                            <img
                                src="https://wpzoom.s3.us-east-1.amazonaws.com/elementor/templates/assets/thumbs/edublock-pro/58.png"
                                alt="History 1889"
                                className="wp-image-6826"
                                style={{ borderRadius: '10px' }}
                                loading="lazy"
                            />
                        </figure>
                        <p className="has-header-footer-color has-text-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                            <br />
                            Sed enim ut sem viverra aliquet. Consectetur a erat nam at lectus
                            urna duis.
                        </p>
                    </div>
                    <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"></div>
                </div>

                {/* --- Événement 1901 --- */}
                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                    <div
                        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: '2%' }}
                    >
                        <div className="wp-block-outermost-icon-block">
                            <div
                                className="icon-container"
                                style={{
                                    width: '48px',
                                    transform: 'rotate(0deg) scaleX(1) scaleY(1)',
                                }}
                            >
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="10.5"
                                        cy="10.5"
                                        r="9"
                                        fill="var(--wp--preset--color--primary)"
                                        stroke="#ECECEC"
                                        strokeWidth="3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div
                        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: '50%' }}
                    >
                        <h4 className="wp-block-heading has-primary-color has-text-color">
                            1901
                        </h4>
                        <div
                            style={{ height: '30px' }}
                            aria-hidden="true"
                            className="wp-block-spacer"
                        ></div>
                        <p className="has-header-footer-color has-text-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"></div>
                </div>

                {/* --- Événement 1938 --- */}
                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                    <div
                        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: '2%' }}
                    >
                        <div className="wp-block-outermost-icon-block">
                            <div
                                className="icon-container"
                                style={{
                                    width: '48px',
                                    transform: 'rotate(0deg) scaleX(1) scaleY(1)',
                                }}
                            >
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="10.5"
                                        cy="10.5"
                                        r="9"
                                        fill="var(--wp--preset--color--primary)"
                                        stroke="#ECECEC"
                                        strokeWidth="3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div
                        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: '50%' }}
                    >
                        <h4 className="wp-block-heading has-primary-color has-text-color">
                            1938
                        </h4>
                        <div
                            style={{ height: '30px' }}
                            aria-hidden="true"
                            className="wp-block-spacer"
                        ></div>
                        <figure className="wp-block-image size-full has-custom-border is-style-rounded">
                            <img
                                src="https://wpzoom.s3.us-east-1.amazonaws.com/elementor/templates/assets/thumbs/edublock-pro/104.png"
                                alt="History 1938"
                                className="wp-image-6828"
                                style={{ borderRadius: '10px' }}
                                loading="lazy"
                            />
                        </figure>
                        <p className="has-header-footer-color has-text-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"></div>
                </div>

                <div
                    style={{ height: '61px' }}
                    aria-hidden="true"
                    className="wp-block-spacer"
                ></div>

                {/* --- Footer / Button --- */}
                <ButtonAll to="#" />
            </div>
        </div>
    );
};