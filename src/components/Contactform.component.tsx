import React from 'react';
import { APPCONTACTS } from '../utils/utils.constants';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { GiPhone } from 'react-icons/gi';

const MarkerIcon = FaMapMarkerAlt as any;
const EnvelopeIcon = FaEnvelope as any;
const PhoneIcon = GiPhone as any;

export const ContactSection: React.FC = () => {
    return (
        <>
            <div style={{ height: '51px' }} aria-hidden="true" className="wp-block-spacer"></div>
            <div className="wp-block-group has-global-padding is-layout-constrained">
                <div
                    className="wp-block-columns are-vertically-aligned-top is-layout-flex"
                    style={{ paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }}
                >
                    <div
                        className="wp-block-column is-vertically-aligned-top is-layout-flow"
                        style={{ paddingRight: '7%', flexBasis: '50%' }}
                    >
                        <h2 className="wp-block-heading has-primary-color has-text-color has-max-36-font-size">
                            Nous contacter
                        </h2>
                        <p className="has-tertiary-color has-text-color">
                            Vous souhaitez en savoir plus sur nos programmes ou sur la vie universitaire à Goma ? Retrouvez ici toutes les informations pour nous joindre directement.
                        </p>

                        <div style={{ height: '40px' }} aria-hidden="true" className="wp-block-spacer" />

                        <div className="wp-block-group has-global-padding is-layout-constrained">
                            <div className="wp-block-columns is-not-stacked-on-mobile is-layout-flex">
                                <div className="wp-block-column" style={{ flexBasis: '36px' }}>
                                    <div className="icon-container" style={{ width: '32px' }}>
                                        <MarkerIcon color="#ff0000" size={32} />
                                    </div>
                                </div>
                                <div className="wp-block-column is-vertically-aligned-top">
                                    <h4 className="wp-block-heading has-primary-color">Addresse physique</h4>
                                    <p className="has-header-footer-color">{APPCONTACTS.address}</p>
                                </div>
                            </div>

                            <div style={{ height: '60px' }} aria-hidden="true" className="wp-block-spacer" />

                            <div className="wp-block-columns is-not-stacked-on-mobile is-layout-flex">
                                <div className="wp-block-column" style={{ flexBasis: '36px' }}>
                                    <div className="icon-container" style={{ width: '32px' }}>
                                        <EnvelopeIcon color="#ff0000" size={32} />
                                    </div>
                                </div>
                                <div className="wp-block-column is-vertically-aligned-top">
                                    <h4 className="wp-block-heading has-primary-color">Adresse mail</h4>
                                    <p className="has-header-footer-color">
                                        {APPCONTACTS.email.map((email, index) => (
                                            <>
                                                <a key={index} className='has-header-footer-color' href={`mailto:${email}`}>{email}</a>
                                                <br />
                                            </>
                                        ))}
                                    </p>
                                </div>
                            </div>

                            <div style={{ height: '60px' }} aria-hidden="true" className="wp-block-spacer" />

                            <div className="wp-block-columns is-not-stacked-on-mobile is-layout-flex">
                                <div className="wp-block-column" style={{ flexBasis: '36px' }}>
                                    <div className="icon-container" style={{ width: '32px' }}>
                                        <PhoneIcon color="#ff0000" size={32} />
                                    </div>
                                </div>
                                <div className="wp-block-column is-vertically-aligned-top">
                                    <h4 className="wp-block-heading has-primary-color">Numero de téléphone</h4>
                                    <p className="has-header-footer-color">
                                        {APPCONTACTS.phone.map((phone, index) => (
                                            <>
                                                <a key={index} className='has-header-footer-color' href={`tel:${phone}`}>{phone}</a>
                                                <br />
                                            </>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wp-block-column is-vertically-aligned-top" style={{ flexBasis: '50%' }}>
                        <form className="wpzoom-forms_form">
                            <div className="wp-block-wpzoom-forms-form">
                                <div className="wp-block-group is-layout-flow">
                                    <div className="wp-block-columns is-layout-flex">
                                        <div className="wp-block-column" style={{ flexBasis: '100%' }}>
                                            <div className="field-group" style={{ marginBottom: '15px' }}>
                                                <label htmlFor="input_name">Nom<sup className="required has-secondary-color">*</sup></label>
                                                <input type="text" id="input_name" name="name" className="fullwidth" />
                                            </div>

                                            <div className="field-group" style={{ marginBottom: '15px' }}>
                                                <label htmlFor="input_email">Adresse mail<sup className="required has-secondary-color">*</sup></label>
                                                <input type="email" id="input_email" name="email" className="fullwidth" />
                                            </div>

                                            <div className="field-group" style={{ marginBottom: '15px' }}>
                                                <label htmlFor="input_subject">Objet<sup className="required has-secondary-color">*</sup></label>
                                                <input type="text" id="input_subject" name="subject" className="fullwidth" />
                                            </div>

                                            <div className="field-group" style={{ marginBottom: '15px' }}>
                                                <label htmlFor="input_message">Message<sup className="required has-secondary-color">*</sup></label>
                                                <textarea id="input_message" name="message" rows={10} className="fullwidth" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="wp-block-columns is-layout-flex" style={{ alignItems: 'center' }}>
                                        <div className="wp-block-column" style={{ flexBasis: '70%' }}>
                                            <input type="submit" value="Envoyez le message" />
                                        </div>
                                        <div className="wp-block-column" style={{ flexBasis: '100%' }}>
                                            <p className="has-text-align-right" style={{ fontSize: '14px' }}>
                                                Les champs marqués par <strong className="has-accent-color has-secondary-color">*</strong> sont requis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{ height: '51px' }} aria-hidden="true" className="wp-block-spacer" />
            </div>
        </>
    );
};
