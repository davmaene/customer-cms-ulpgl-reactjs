import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import { routes } from '../../utils/utils.routes';

const ArrowForward = MdArrowForward as any;

export const ArticleCardLessInfo: React.FC<{ post: Post }> = ({ post }) => {
    const link = routes.ARTICLESDETAILS.concat("/").concat(post?.post_name)
    const link_category = routes.ARTICLES.concat("/").concat(post?.post_category)
    return (
        <div className="col-lg-6">
            <Link to={link} className='d-block text-decoration-none text-dark'>
                <div className="wp-block-post type-post status-publish format-standard hentry">
                    <h5
                        className="has-link-color wp-block-post-title has-text-color has-tertiary-color has-medium-font-size"
                        style={{ margin: '0 0 var(--wp--preset--spacing--x-small) 0' }}
                    >
                        <Link to={link}>{post?.post_title}</Link>
                    </h5>

                    <div
                        className="wp-block-group is-content-justification-left is-nowrap is-layout-flex wp-block-group-is-layout-flex"
                        style={{ marginBottom: 'var(--wp--preset--spacing--x-small)' }}
                    >
                        <div className="taxonomy-category wp-block-post-terms">
                            <Link to={link_category} rel="tag">{post.post_category}</Link>
                        </div>
                        <p className="has-lightgrey-color has-text-color">•</p>
                        <div className="wp-block-post-date">
                            <time dateTime={post.post_date_gmt}>{post.post_date}</time>
                        </div>
                    </div>

                    <div className="wp-block-post-excerpt">
                        {/* <p className="wp-block-post-excerpt__excerpt"></p> */}
                        <div
                            className="wp-block-post-excerpt__excerpt"
                            dangerouslySetInnerHTML={{ __html: post.post_excerpt }}
                        />
                    </div>

                    <Link
                        className="wp-block-read-more has-text-color has-secondary-color has-background has-white-background-color"
                        style={{ padding: 0 }}
                        to={link}
                    >
                        <strong>Lire plus <ArrowForward style={{ marginLeft: '10px' }} /></strong>
                        <span className="screen-reader-text">: {post.post_title}</span>
                    </Link>

                    <div style={{ height: '71px' }} aria-hidden="true" className="wp-block-spacer"></div>
                </div>
            </Link>
        </div>
    )
};