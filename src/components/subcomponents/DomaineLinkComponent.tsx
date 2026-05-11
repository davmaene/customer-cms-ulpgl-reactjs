export const DomaineLink: React.FC<{ text: string; href: string }> = ({ text, href }) => {
    return (
        <div className="wp-block-columns alignwide are-vertically-aligned-center is-not-stacked-on-mobile is-layout-flex wp-container-core-columns-is-layout-d7d455e7 wp-block-columns-is-layout-flex"
            style={{ borderStyle: 'none', borderWidth: '0px', borderRadius: '0px', paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }}>

            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '95%' }}>
                <p className="has-header-footer-color has-text-color has-link-color">
                    <a href={href}>{text}</a>
                </p>
            </div>

            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '5%' }}>
                <div className="wp-block-outermost-icon-block items-justified-right">
                    <div className="icon-container" style={{ width: '16px', transform: 'rotate(0deg) scaleX(1) scaleY(1)' }}>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.70998 12.7082L11.71 7.70823C11.801 7.61313 11.8724 7.50098 11.92 7.37823C12.02 7.13477 12.02 6.86169 11.92 6.61823C11.8724 6.49548 11.801 6.38334 11.71 6.28823L6.70998 1.28823C6.61674 1.19499 6.50605 1.12103 6.38423 1.07057C6.26241 1.02011 6.13184 0.99414 5.99998 0.99414C5.73368 0.99414 5.47828 1.09993 5.28998 1.28823C5.10168 1.47654 4.99589 1.73193 4.99589 1.99823C4.99589 2.26453 5.10168 2.51993 5.28998 2.70823L8.58998 5.99823L0.999982 5.99823C0.734765 5.99823 0.48041 6.10359 0.292874 6.29113C0.105338 6.47866 -1.83707e-05 6.73302 -1.83823e-05 6.99823C-1.83939e-05 7.26345 0.105338 7.5178 0.292874 7.70534C0.48041 7.89287 0.734765 7.99823 0.999982 7.99823L8.58998 7.99823L5.28998 11.2882C5.19625 11.3812 5.12186 11.4918 5.07109 11.6137C5.02032 11.7355 4.99418 11.8662 4.99418 11.9982C4.99418 12.1302 5.02032 12.2609 5.07109 12.3828C5.12186 12.5047 5.19625 12.6153 5.28998 12.7082C5.38294 12.802 5.49355 12.8764 5.6154 12.9271C5.73726 12.9779 5.86797 13.004 5.99998 13.004C6.13199 13.004 6.2627 12.9779 6.38456 12.9271C6.50642 12.8764 6.61702 12.802 6.70998 12.7082Z" fill="var(--wp--preset--color--secondary)"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};