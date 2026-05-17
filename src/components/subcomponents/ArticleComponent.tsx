import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { routes } from '../../utils/utils.routes';
import { truncateText } from '../../utils/utils.fucntions';

const ArrowForward = IoIosArrowForward as any;

export const ArticleCard: React.FC<Post> = ({ post_excerpt, post_name, post_title, post_image }) => {
    const link = routes.ARTICLESDETAILS.concat("/").concat(post_name);

    return (
        <Link to={link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
            <div
                className="wp-block-column has-light-background-background-color has-background is-layout-flow wp-block-column-is-layout-flow cursor-pointer"
                style={{
                    borderStyle: 'none',
                    borderWidth: '0px',
                    padding: '0px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%' // Force la carte à prendre toute la hauteur disponible du parent Grid/Row
                }}
            >
                {/* Image */}
                <figure className="wp-block-image size-large has-custom-border" style={{ margin: '0 0 15px 0' }}>
                    <img decoding="async" src={post_image} alt="" className="wp-image-5969" style={{ borderRadius: '10px', width: '100%', objectFit: 'cover' }} />
                </figure>

                {/* Titre avec une hauteur minimale fixe pour bloquer l'alignement du texte suivant */}
                <h4
                    className="wp-block-heading has-primary-color has-text-color has-large-font-size"
                    style={{
                        minHeight: '60px', // Ajustez cette valeur selon la longueur max de vos titres (ex: 2 lignes)
                        margin: '0 0 10px 0',
                        lineHeight: '1.3'
                    }}
                >
                    {post_title}
                </h4>

                {/* Description avec hauteur minimale fixe */}
                <p
                    className="has-header-footer-color has-text-color"
                    style={{
                        minHeight: '70px', // Ajustez pour bloquer l'espace du paragraphe (ex: 3 lignes)
                        margin: '0 0 15px 0',
                        fontSize: '14px'
                    }}
                >
                    {truncateText(post_excerpt, 100)}
                </p>

                {/* Bouton "Lire plus" poussé tout en bas si besoin grâce à margin-top: auto */}
                <p style={{ marginTop: 'auto', marginBottom: '0px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', color: '#002060', fontWeight: 'bold' }}>
                        Lire plus
                        <ArrowForward style={{ marginLeft: '5px' }} />
                    </span>
                </p>
            </div>
        </Link>
    );
};