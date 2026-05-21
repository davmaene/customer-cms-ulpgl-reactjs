import { Link } from "react-router-dom";
import { truncateText } from "../../utils/utils.fucntions";
import { IoIosArrowForward } from "react-icons/io";
import { Colors } from "../../utils/utils.colors";

const ArrowForward = IoIosArrowForward as any;

export const ExploreCenterCard: React.FC<Center> = (item) => {
    const { title, images, href, description: desc } = item;
    const description = truncateText(desc, 100);

    return (
        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
            style={{
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}>

            <div
                className="wp-block-cover has-custom-content-position is-position-bottom-left is-style-round-corners bg-primary has-background is-layout-flow wp-block-cover-is-layout-flow"
                style={{
                    paddingTop: 'var(--wp--preset--spacing--small)',
                    paddingRight: 'var(--wp--preset--spacing--small)',
                    paddingBottom: 'var(--wp--preset--spacing--small)',
                    paddingLeft: 'var(--wp--preset--spacing--small)',
                    minHeight: '50px',
                    aspectRatio: 'unset',
                    border: "1px solid var(--wp--preset--color--primary)",
                }}>

                <span
                    aria-hidden="true"
                    className="wp-block-cover__background has-background-dim-80 has-background-dim wp-block-cover__gradient-background has-background-gradient has-black-primary-gradient-background"
                />

                {/* <img decoding="async" className="wp-block-cover__image-background" alt=""
          src={`https://wpzoom.s3.us-east-1.amazonaws.com/elementor/templates/assets/thumbs/edublock-pro/${image}`}
          data-object-fit="cover" /> */}

                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                    <p style={{ marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0 }}>
                        {/* <NavItem href={href} label={title} color={Colors.whiteColor} icon={<ArrowForward style={{ marginLeft: '10px' }} />} /> */}
                        <Link to={href} state={{ item: item as Center }}><strong className='text-uppercase text-white has-small-font-sizes'>{title} <ArrowForward style={{ marginLeft: '10px', color: Colors.whiteColor }} /></strong></Link>
                    </p>
                    <p className='pt-3'>{description}</p>
                </div>
            </div>
        </div>
    );
};