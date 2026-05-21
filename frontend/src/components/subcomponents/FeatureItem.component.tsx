export const FeatureItem: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
    isLast?: boolean;
    linkTarget?: string;
}> = ({ icon, title, description, linkText, linkHref, isLast, linkTarget }) => {
    return (
        <div className="wp-block-column is-style-default is-layout-flow wp-block-column-is-layout-flow h-100 d-flex flex-column"
            style={{
                borderTopStyle: 'none',
                borderTopWidth: '0px',
                borderBottomStyle: 'none',
                borderBottomWidth: '0px',
                paddingRight: '5%',
                ...(!isLast ? { borderRightColor: '#6c6c77', borderRightWidth: '1px' } : {})
            }}>

            <div className="wp-block-columns are-vertically-aligned-center is-not-stacked-on-mobile is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '72px' }}>
                    {icon}
                </div>
                <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                    style={{ paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0, flexBasis: '100%' }}>
                    <h4 className="wp-block-heading has-text-align-left has-white-color has-text-color m-0">{title}</h4>
                </div>
            </div>
            <p className="has-lightgrey-color has-text-color pt-4 flex-grow-1">
                {description}
            </p>

            <p className="has-link-color has-small-font-size text-white mt-auto" style={{ margin: 0 }}>
                <a href={linkHref} target={linkTarget} className="text-white">
                    <strong>{linkText}</strong> →
                </a>
            </p>
        </div>
    );
};