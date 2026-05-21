import { Link } from "react-router-dom";

export const ButtonAll: React.FC<{ onClick?: () => void; label?: string; to: string }> = ({ onClick, label, to }) => {
    return (
        <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
            <div
                className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                style={{ flexBasis: '11%' }}
            >
                <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                    <div className="wp-block-button is-style-outline-background">
                        <Link
                            to={to}
                            className="wp-block-button__link wp-element-button"
                            style={{ borderRadius: '4px' }}
                        >
                            Voir plus
                        </Link>
                    </div>
                </div>
            </div>

            <div
                className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                style={{ flexBasis: '85%' }}
            >
                <hr className="wp-block-separator aligncenter has-text-color has-lightgrey-color has-alpha-channel-opacity has-lightgrey-background-color has-background is-style-wide" />
            </div>
        </div>
    )
}