import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { routes } from '../../utils/utils.routes';

const ArrowForward = IoIosArrowForward as any;

export const ArticleCard: React.FC<Post> = ({ post_excerpt, post_name, post_title, post_image }) => {
    const link = routes.ARTICLESDETAILS.concat("/").concat(post_name)

    return (
        <Link to={link}>
            <div className="wp-block-column has-light-background-background-color has-background is-layout-flow wp-block-column-is-layout-flow cursor-pointer" style={{ borderStyle: 'none', borderWidth: '0px', paddingTop: '0px', paddingRight: '0px', paddingBottom: '0px', paddingLeft: '0px' }}>
                <figure className="wp-block-image size-large has-custom-border">
                    <img decoding="async" src={post_image} alt="" className="wp-image-5969" style={{ borderRadius: '10px' }} />
                </figure>

                <h4 className="wp-block-heading has-primary-color has-text-color has-large-font-size">{post_title}</h4>
                <p className="has-header-footer-color has-text-color">{post_excerpt}</p>
                <p>
                    <Link to={link}>
                        Lire plus
                        <ArrowForward style={{ marginLeft: '10px' }} />
                    </Link>
                </p>
            </div>
        </Link>
    );
};