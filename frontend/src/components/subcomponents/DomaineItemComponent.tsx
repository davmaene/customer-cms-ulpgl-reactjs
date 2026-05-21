import React from "react";
import { DomaineLink } from "./DomaineLinkComponent";

export const DomaineItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  links: Array<{ text: string; href: string }>;
}> = ({ icon, title, links }) => {
  return (
    <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
      style={{ borderStyle: 'none', borderWidth: '0px', paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }}>

      <div className="wp-block-group has-border-color has-lightgrey-border-color has-global-padding is-layout-constrained wp-container-core-group-is-layout-dbf27b9b wp-block-group-is-layout-constrained"
        style={{ borderWidth: '1px', borderRadius: '20px', paddingTop: 'var(--wp--preset--spacing--small)', paddingRight: 'var(--wp--preset--spacing--small)', paddingBottom: 'var(--wp--preset--spacing--small)', paddingLeft: 'var(--wp--preset--spacing--small)' }}>

        <div className="wp-block-columns are-vertically-aligned-center is-not-stacked-on-mobile is-layout-flex wp-container-core-columns-is-layout-d7d455e7 wp-block-columns-is-layout-flex"
          style={{ borderStyle: 'none', borderWidth: '0px', borderRadius: '0px', paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }}>

          <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '36px' }}>
            {icon}
          </div>

          <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '100%' }}>
            <h4 className="wp-block-heading has-primary-color has-text-color has-small-font-size" style={{ fontWeight: 'bold' }}>{title}</h4>
          </div>
        </div>

        {links.map((link, index) => (
          <React.Fragment key={index}>
            <DomaineLink text={link.text} href={link.href} />
            {index < links.length - 1 && (
              <hr className="wp-block-separator has-text-color has-lightgrey-color has-alpha-channel-opacity has-lightgrey-background-color has-background is-style-wide" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};