import hero from '../assets/videos/hero-video.mp4';
import { APPNAME, APPOWNER } from '../utils/utils.constants';
import { FeatureItem } from './subcomponents/FeatureItem.component';
import { Hrseparator } from './subcomponents/Hrseparator';
import { IoIosArrowForward } from "react-icons/io";
import { discoverIcon, newsIcon, registrationIcon } from './subcomponents/Icons';
import heroImage from '../assets/images/hero-image.png';
import { NavLink } from 'react-router-dom';
import { routes } from '../utils/utils.routes';

const ArrowForward = IoIosArrowForward as any;

export const HeroSection: React.FC = () => {
    return (
        <main className="wp-block-group alignfull site-content is-style-default is-layout-flow wp-container-core-group-is-layout-2bb4a3bc wp-block-group-is-layout-flow"
            style={{ marginTop: 0, marginBottom: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }}>

            <div className="wp-block-cover alignwide is-style-default"
                style={{ borderRadius: '0px', paddingTop: 'var(--wp--preset--spacing--small)', paddingRight: '0px', paddingBottom: 'var(--wp--preset--spacing--small)', paddingLeft: '0px' }}
            >
                <span
                    aria-hidden="true"
                    className="wp-block-cover__background has-background-dim-100 has-background-dim wp-block-cover__gradient-background has-background-gradient has-black-primary-gradient-background">
                </span>

                <img
                    className="wp-block-cover__image-background intrinsic-ignore"
                    alt="Hero Image"
                    src={heroImage}
                    style={{ objectPosition: '35% 37%' }}
                    data-object-fit="cover"
                // data-object-position="35% 37%"
                />

                {/* <video
                    className="wp-block-cover__video-background intrinsic-ignore"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="https://demo.wpzoom.com/edublock-pro/files/2022/12/pexels-olia-danilevich-8060813.mp4"
                    style={{ objectPosition: '35% 37%' }} data-object-fit="cover"
                    data-object-position="35% 37%"></video> */}


                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                    <div style={{ height: '100px' }} aria-hidden="true" className="wp-block-spacer"></div>

                    <div className="wp-block-group is-style-default has-global-padding is-layout-constrained wp-container-core-group-is-layout-e73fcf31 wp-block-group-is-layout-constrained"
                        style={{ paddingRight: '5%', paddingLeft: '5%' }}>

                        <div style={{ height: '56px' }} aria-hidden="true" className="wp-block-spacer"></div>

                        <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '62%' }}>
                                <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" style={{ paddingTop: 'var(--wp--preset--spacing--50)', paddingBottom: 'var(--wp--preset--spacing--50)' }}>
                                    <h1 className="wp-block-heading has-text-align-left has-white-color has-text-color has-max-60-font-size"
                                        style={{ lineHeight: '1.2' }}>
                                        {APPOWNER} <br />( {APPNAME} )
                                    </h1>

                                    <p className="has-text-align-left">
                                        Nous sommes l’Université Libre des Pays des Grands Lacs ( ULPGL ), une université Chrétienne des Eglises Protestantes des Pays de Grands Lacs,  privée et agréée par le Gouvernement congolais<br />
                                        <Hrseparator />
                                        L’ULPGL est issue de l’Institut supérieur de théologie protestante créé en 1985 et transformé en université ( ULPGL ) en 1990. Elle est localisée dans la ville de Goma, en province du Nord-Kivu, en république Démocratique. Notre devise est : Foi-Science-Action
                                    </p>

                                    <div className="wp-block-buttons is-content-justification-left is-layout-flex wp-container-core-buttons-is-layout-fc4fd283 wp-block-buttons-is-layout-flex">
                                        <div className="wp-block-button- wpz-alt-button">
                                            <NavLink className="wp-block-button__link wp-element-button w-100" to={routes.ABOUT}>
                                                En savoir plus
                                                <ArrowForward style={{ marginLeft: '10px' }} />
                                            </NavLink>
                                        </div>
                                        {/* <div className="wp-block-button wpz-alt-button is-style-fill">
                                            <a className="wp-block-button__link has-foreground-color has-white-background-color has-text-color has-background has-link-color wp-element-button"
                                                style={{ paddingTop: '8px', paddingRight: '24px', paddingBottom: '8px', paddingLeft: '24px' }}>
                                                Schedule a Visit
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '8vh' }} aria-hidden="true" className="wp-block-spacer"></div>
                </div>
            </div>

            <div className="wp-block-group alignwide is-style-default has-primary-background-color has-background has-global-padding is-layout-constrained- wp-block-group-is-layout-constrained">
                <div style={{ height: '5.5vh' }} aria-hidden="true" className="wp-block-spacer"></div>

                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex w-75 mx-auto">
                    <div className="col-md-4 d-flex">
                        <FeatureItem
                            icon={registrationIcon}
                            title="Inscription"
                            description="Prêt à franchir une nouvelle étape dans votre parcours académique ?"
                            linkText="Demander une inscription"
                            linkHref="https://uat.ulpgl.net/UATApplication/"
                            linkTarget="_blank"
                        />
                    </div>

                    <div className="col-md-4 d-flex">
                        <FeatureItem
                            icon={newsIcon}
                            title="Dernières nouvelles"
                            description={`Tout ce qui se passe à ${APPOWNER}, les événements à venir, les annonces importantes et les histoires inspirantes de nos étudiants et de notre communauté.`}
                            linkText="Parcourir les actualités"
                            linkHref={routes.ARTICLES}
                        />
                    </div>

                    <div className="col-md-4 d-flex">
                        <FeatureItem
                            icon={discoverIcon}
                            title="Découvrez-nous"
                            description="Faites un tour de nos campus, découvrez nos programmes et voyez par vous-même pourquoi nous sommes l'université idéale pour vous."
                            linkText="En savoir plus"
                            linkHref={routes.ABOUT}
                            isLast
                        />
                    </div>

                </div>
                <div style={{ height: '60px' }} aria-hidden="true" className="wp-block-spacer"></div>
            </div>
        </main>
    );
};