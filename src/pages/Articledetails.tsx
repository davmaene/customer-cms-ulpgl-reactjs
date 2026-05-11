import React from 'react';
import { BreadcrumbArticle } from '../components/subcomponents/BreadcrumpArticle';
import { useParams } from 'react-router-dom';
import { SocialShare } from '../components/subcomponents/Sharesocial';
import { categoriesArticles } from '../utils/utils.statiquedata';
import { truncateText } from '../utils/utils.fucntions';

export const ArticleDerails: React.FC = () => {
    const { article } = useParams()
    const [articleItem, setArticle] = React.useState<Post>({
        id: 2,
        post_author: "It Support",
        post_date: "2026-03-25 09:30:00",
        post_date_gmt: "2026-03-25 08:30:00",
        post_title: "Design Minimaliste : Pourquoi Moins c'est Mieux",
        post_content: `
        <p>Le minimalisme n'est pas qu'une simple esthétique visuelle ; c'est une philosophie de conception qui place l'utilisateur au centre de l'expérience. Dans un monde numérique saturé d'informations, la clarté devient un luxe et une nécessité.</p>
        
        <h2>L'origine du mouvement : Le "Less is More"</h2>
        <p>Popularisé par l'architecte Ludwig Mies van der Rohe, le concept du minimalisme en design repose sur l'élimination de tout élément superflu. En web design, cela se traduit par une hiérarchie visuelle forte, beaucoup d'espaces blancs (ou <em>negative space</em>) et une typographie soignée.</p>
        
        <h3>Les bénéfices concrets pour l'utilisateur</h3>
        <ul>
            <li><strong>Réduction de la charge cognitive :</strong> Moins de distractions permettent à l'utilisateur de se concentrer sur l'essentiel : votre contenu.</li>
            <li><strong>Amélioration des performances :</strong> Moins d'éléments graphiques lourds signifient des temps de chargement plus rapides, un facteur clé pour le SEO.</li>
            <li><strong>Adaptabilité mobile :</strong> Un design épuré est naturellement plus facile à rendre responsive sur tous les types d'écrans.</li>
        </ul>

        <blockquote>"La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer." — Antoine de Saint-Exupéry</blockquote>

        <h2>Comment appliquer le minimalisme aujourd'hui ?</h2>
        <p>Il ne suffit pas de vider une page pour faire du minimalisme. Il s'agit de choisir avec intention chaque couleur, chaque police et chaque icône. L'utilisation stratégique du contraste et de la proximité permet de guider l'œil sans avoir besoin de boutons clinquants ou de bannières intrusives.</p>
        
        <p>En conclusion, adopter le minimalisme, c'est respecter le temps et l'attention de vos visiteurs. C'est un gage de professionnalisme et de modernité qui ne se démode jamais.</p>
    `,
        post_category: "Design",
        post_excerpt: "Découvrez comment la philosophie du 'Less is More' transforme l'expérience utilisateur et pourquoi l'épure est devenue l'arme ultime des designers modernes.",
        post_status: "publish",
        comment_status: false,
        ping_status: "closed",
        post_name: "design-minimaliste",
        post_type: "post",
        comment_count: 5,
        post_image: "https://picsum.photos/id/20/800/600"
    });

    return (
        <div className="container py-5">
            {/* Header de l'article */}
            <header className="mb-5">
                <BreadcrumbArticle
                    category={articleItem?.post_category ?? ""}
                    post_title={truncateText(articleItem?.post_title ?? "", 50)}
                />
                <h1 className="display-5 fw-bold">{articleItem?.post_title ?? ""}</h1>

                <div className="post-meta d-flex align-items-center text-muted small mt-3">
                    <span>{articleItem?.post_author ?? ""}</span>
                    <span className="mx-2">·</span>
                    <span className="text-primary text-uppercase fw-bold">{articleItem?.post_category ?? ""}</span>
                    <span className="mx-2">·</span>
                    <time dateTime={articleItem?.post_date_gmt ?? ""}>{articleItem?.post_date ?? ""}</time>
                </div>
                <hr className="my-4" style={{ opacity: 0.1 }} />
            </header>

            <div className="row">
                <aside className="col-md-4 pe-md-5">
                    <SocialShare
                        post_name={article ?? ""}
                    />

                    <div className="mt-5 pt-5">
                        <h2 className="h4 fw-bold mb-3">Autres catégories</h2>
                        <hr className="mb-3" />
                        <ul className="list-unstyled">
                            {categoriesArticles.map((category, idx) => (
                                <li key={idx} className="mb-2"><a href={category.href} className="text-decoration-none text-dark">{category.name}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-5">
                        <h2 className="h4 fw-bold mb-3">Tags</h2>
                        <div className="d-flex flex-wrap gap-2">
                            <span className="badge border text-secondary fw-normal">design</span>
                            <span className="badge border text-secondary fw-normal">interior</span>
                            <span className="badge border text-secondary fw-normal">minimal</span>
                        </div>
                    </div>
                </aside>

                {/* Corps de l'article - 66% */}
                <main className="col-md-8">
                    <article className="entry-content">
                        <div
                            className="prose lead-"
                            dangerouslySetInnerHTML={{ __html: articleItem?.post_content ?? "" }}
                        />
                        {/* <p className="lead">
                            {articleItem?.post_content ?? ""}
                        </p> */}
                        {/* Galerie d'images (Mosaïque simple avec Bootstrap) */}
                        <div className="row g-3 my-4">
                            {articleItem?.post_attached_images?.map((image, idx) => (
                                <div className="col-6 col-md-4">
                                    <img src={image} className="img-fluid rounded" alt="Gallery" />
                                </div>
                            ))}
                        </div>
                    </article>
                </main>
            </div>
        </div>
    );
};