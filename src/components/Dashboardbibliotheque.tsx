import React from 'react';
import { Card, Col, Row, Typography, Space, Button, Tag, Divider } from 'antd';
import {
    ClockCircleOutlined,
    BookOutlined,
    BarChartOutlined,
    UserAddOutlined,
    CalendarOutlined,
    ReloadOutlined
} from '@ant-design/icons';
import { Colors } from '../utils/utils.colors';
import roi from "../assets/others/reglement_BU-ULPGL.pdf"
import { NavLink } from 'react-router-dom';
import { routes } from '../utils/utils.routes';

const { Title, Text, Paragraph } = Typography;

export const LibraryDashboard: React.FC = () => {
    const onDownloadROI = async (e: React.MouseEvent<HTMLElement>) => {
        window.open(roi, "_blank")
    }

    return (
        <Row gutter={[24, 24]}>

            {/* CARD 1 : HORAIRES */}
            <Col xs={24} md={12} lg={8}>
                <Card
                    hoverable={false}
                    title={<Space style={{ textAlign: "center", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", padding: 12, width: "100%" }}>
                        <ClockCircleOutlined style={{ color: Colors.primaryColor, fontSize: 45 }} />
                        <span style={{ color: Colors.primaryColor }}>Horaires</span>
                    </Space>}
                    style={{ height: '100%', textAlign: "center" }}
                >
                    <div style={{ marginBottom: '16px' }}>
                        <Tag color={Colors.primaryColor} style={{ width: "100%", textAlign: "center" }}>Campus Moïse</Tag>
                        <Paragraph style={{ marginTop: '8px', marginBottom: 0, textAlign: "center" }}>
                            <b>Lun - Ven</b>
                            <p>8h00 – 12h00 / 13h00 – 20h00</p>
                            <b>Samedi</b>
                            <p>9h00 – 14h00</p>
                        </Paragraph>
                    </div>
                    <Divider dashed style={{ margin: '12px 0' }} />
                    <div>
                        <Tag color={Colors.primaryColor} style={{ width: "100%", textAlign: "center" }}>Campus Salomon</Tag>
                        <Paragraph style={{ marginTop: '8px', marginBottom: 0, textAlign: "center" }}>
                            <b>Lun - Ven</b>
                            <p>8h00 – 12h00 / 13h00 – 18h30</p>
                            <b>Samedi</b>
                            <p>9h00 – 14h00</p>
                        </Paragraph>
                    </div>
                    <Divider dashed style={{ margin: '12px 0' }} />
                    <b style={{ textAlign: "center", alignSelf: "center", color: Colors.redColor }}>Dimanche : Fermé</b>
                </Card>
            </Col>
            <Col xs={24} md={12} lg={8}>
                <Card
                    hoverable={false}
                    title={<Space style={{ textAlign: "center", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", padding: 12, width: "100%" }}>
                        <BookOutlined style={{ color: Colors.primaryColor, fontSize: 45 }} />
                        <span style={{ color: Colors.primaryColor }}>Catalogue en Ligne</span>
                    </Space>}
                    style={{ height: '100%', textAlign: "center" }}
                >
                    <Paragraph style={{ textAlign: "center" }}>
                        Le catalogue collectif répertorie environ <b>14 000 livres imprimés</b> et près de <b>640 livres électroniques</b> disponibles dans les trois bibliothèques de l'ULPGL.
                    </Paragraph>
                    <Paragraph type="secondary" style={{ textAlign: "center", marginBottom: '24px' }}>
                        Le fonds de la bibliothèque est accessible en ligne à partir du site web.
                    </Paragraph>
                    {/* <Button type="primary" icon={<BookOutlined />} href="#url-catalogue" style={{ backgroundColor: Colors.primaryColor, borderColor: Colors.primaryColor }}>
                        Accès au catalogue
                    </Button> */}
                </Card>
            </Col>

            {/* CARD 3 : CHIFFRES CLÉS */}
            <Col xs={24} md={12} lg={8}>
                <Card
                    hoverable={false}
                    title={<Space style={{ textAlign: "center", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", padding: 12, width: "100%" }}>
                        <BarChartOutlined style={{ color: Colors.primaryColor, fontSize: 45 }} />
                        <span style={{ color: Colors.primaryColor }}>Chiffres-clés</span>
                    </Space>}
                    style={{ height: '100%', textAlign: "center" }}
                >
                    <Title level={4} style={{ marginTop: 0, marginBottom: '16px', textAlign: "center" }}>29 000 Documents</Title>
                    <div style={{ textAlign: "center", display: "inline-block", width: "100%", marginBottom: '12px' }}>
                        <p style={{ margin: '4px 0' }}><b>14 962</b> livres imprimés</p>
                        <p style={{ margin: '4px 0' }}><b>10 014</b> périodiques imprimés</p>
                        <p style={{ margin: '4px 0' }}><b>3 420</b> travaux univ. (TFC, Mémoires, Thèses)</p>
                        <p style={{ margin: '4px 0' }}><b>1 231</b> livres électroniques</p>
                    </div>
                    <Divider dashed style={{ margin: '12px 0' }} />
                    <Tag color={Colors.primaryColor} style={{ width: "100%", textAlign: "center", marginBottom: '8px' }}>Places assises</Tag>
                    <b style={{ display: 'block', textAlign: 'center' }}>80 places au total</b>
                    <p style={{ margin: '4px 0 0 0', textAlign: 'center', fontSize: '13px' }}>40 au Campus Moïse | 40 au Campus Salomon</p>
                </Card>
            </Col>

            {/* CARD 4 : INSCRIPTION */}
            <Col xs={24} md={12} lg={8}>
                <Card
                    hoverable={false}
                    title={<Space style={{ textAlign: "center", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", padding: 12, width: "100%" }}>
                        <UserAddOutlined style={{ color: Colors.primaryColor, fontSize: 45 }} />
                        <span style={{ color: Colors.primaryColor }}>S'inscrire</span>
                    </Space>}
                    style={{ height: '100%', textAlign: "center" }}
                >
                    <b style={{ color: Colors.primaryColor, display: "block", marginBottom: '16px', textAlign: "center" }}>
                        La bibliothèque est ouverte à tous les publics.
                    </b>
                    <div style={{ textAlign: "center", marginBottom: '16px' }}>
                        <b style={{ color: '#595959' }}>Étudiants ULPGL</b>
                        <p style={{ fontSize: '13px', margin: '4px 0' }}>Présentez-vous après acquittement de vos droits. Votre carte d'étudiant sert pour les prêts/retours et reste valable toute l'année universitaire.</p>
                    </div>
                    <Divider dashed style={{ margin: '12px 0' }} />
                    <div style={{ textAlign: "center", marginBottom: '16px' }}>
                        <b style={{ color: '#595959' }}>Autres lecteurs</b>
                        <p style={{ fontSize: '13px', margin: '4px 0' }}>Inscription sur présentation d'une pièce d'identité ou carte justificative. Les tarifs dépendent de votre catégorie.</p>
                    </div>
                    {/* <Button type="link" style={{ color: Colors.primaryColor }}>Lire plus</Button> */}
                </Card>
            </Col>

            {/* CARD 5 : RÉSERVATIONS */}
            <Col xs={24} md={12} lg={8}>
                <Card
                    hoverable={false}
                    title={<Space style={{ textAlign: "center", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", padding: 12, width: "100%" }}>
                        <CalendarOutlined style={{ color: Colors.primaryColor, fontSize: 45 }} />
                        <span style={{ color: Colors.primaryColor }}>Réservations</span>
                    </Space>}
                    style={{ height: '100%', textAlign: "center" }}
                >
                    <Paragraph style={{ textAlign: "center" }}>
                        Faites votre demande sur les documents empruntés par un autre lecteur (<b>maximum 2</b> demandes simultanées).
                    </Paragraph>
                    <p style={{ fontSize: '13px', textAlign: "center", margin: '12px 0' }}>
                        L'opération s'effectue sur le catalogue en ligne via le bouton "réservation" en face de l'exemplaire.
                    </p>
                    <Paragraph type="secondary" style={{ fontSize: '13px', textAlign: "center", marginBottom: '20px' }}>
                        Dès disponibilité, vous êtes notifié par <b>mail et SMS</b>. Le document vous est réservé pendant <b>3 jours</b>.
                    </Paragraph>
                    <div className="wp-block-button- wpz-alt-button w-100" style={{ alignSelf: "center", justifyContent: "center" }}>
                        <NavLink
                            className="wp-block-button__link wp-element-button w-100"
                            to={routes.HOME}
                            onClick={onDownloadROI}
                        >
                            Règlements
                        </NavLink>
                    </div>
                    {/* <Button
                        type="dashed"
                        style={{ color: Colors.primaryColor, borderColor: Colors.primaryColor }}
                        onClick={onDownloadROI}
                    >
                        Télécharger le règlement
                    </Button> */}
                </Card>
            </Col>

            {/* CARD 6 : PROLONGER UN PRÊT */}
            <Col xs={24} md={12} lg={8}>
                <Card
                    hoverable={false}
                    title={<Space style={{ textAlign: "center", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", padding: 12, width: "100%" }}>
                        <ReloadOutlined style={{ color: Colors.primaryColor, fontSize: 45 }} />
                        <span style={{ color: Colors.primaryColor }}>Prolonger un prêt</span>
                    </Space>}
                    style={{ height: '100%', textAlign: "center" }}
                >
                    <Paragraph style={{ textAlign: "center", marginBottom: '16px' }}>
                        Rendez-vous dans votre <b>Compte</b>, en cliquant sur « Prêts en cours » après vous être authentifié.
                    </Paragraph>
                    <Divider dashed style={{ margin: '12px 0' }} />
                    <div style={{ textAlign: "center", fontSize: '13px', color: '#595959' }}>
                        <p style={{ margin: '6px 0' }}>• Autorisé pour les étudiants, enseignants et personnels de l'ULPGL.</p>
                        <p style={{ margin: '6px 0' }}>• <b>Une seule prolongation</b> maximum par document.</p>
                        <p style={{ margin: '6px 0' }}>• Impossible si le document est en retard ou déjà réservé.</p>
                        <p style={{ margin: '6px 0 0 0' }}>• Action possible jusqu'à <b>la veille</b> de la date de retour initiale.</p>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};