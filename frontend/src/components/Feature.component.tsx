import { FeatureItem } from "./subcomponents/FeatureItem.component";
import { discoverIcon, newsIcon, registrationIcon } from "./subcomponents/Icons";

export const FeaturesSection: React.FC = () => {

    return (
        <div className="wp-block-group alignwide is-style-default has-primary-background-color has-background has-global-padding is-layout-constrained- wp-block-group-is-layout-constrained">
            <div style={{ height: '5.5vh' }} aria-hidden="true" className="wp-block-spacer"></div>

            <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                <FeatureItem
                    icon={registrationIcon}
                    title="Registration"
                    description="Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus."
                    linkText="Apply now"
                    linkHref="index.html"
                />

                <div className="wp-block-column is-style-default is-layout-flow wp-block-column-is-layout-flow"
                    style={{ borderTopStyle: 'none', borderTopWidth: '0px', borderRightColor: '#6c6c77', borderRightWidth: '1px', borderBottomStyle: 'none', borderBottomWidth: '0px', paddingRight: '5%', paddingLeft: '2%' }}>

                    <div className="wp-block-columns are-vertically-aligned-center is-not-stacked-on-mobile is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                        <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '72px' }}>
                            {newsIcon}
                        </div>
                        <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                            style={{ paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0, flexBasis: '100%' }}>
                            <h4 className="wp-block-heading has-text-align-left has-white-color has-text-color">Latest news</h4>
                        </div>
                    </div>

                    <p className="has-lightgrey-color has-text-color">Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus.</p>

                    <div style={{ height: '50px' }} aria-hidden="true" className="wp-block-spacer"></div>

                    <p className="has-link-color has-small-font-size" style={{ marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0 }}>
                        <a href="index.html">Read now →</a>
                    </p>
                </div>

                <FeatureItem
                    icon={discoverIcon}
                    title="Discover us"
                    description="Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus."
                    linkText="Learn more"
                    linkHref="index.html"
                    isLast
                />
            </div>

            <div style={{ height: '60px' }} aria-hidden="true" className="wp-block-spacer"></div>
        </div>
    );
};