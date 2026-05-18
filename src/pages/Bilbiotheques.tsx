import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BreadcrumbCenter } from "../components/subcomponents/BreadcrumpCenter";
import { randomNumber, truncateText } from "../utils/utils.fucntions";
import { SocialShare } from "../components/subcomponents/Sharesocial";
import { routes } from "../utils/utils.routes";
import { ContactLink } from "../components/subcomponents/ContactComponent";
import { Hrseparator } from "../components/subcomponents/Hrseparator";
import { BreadcrumpComponent } from "../components/subcomponents/BreadcrumpCompont";
import hero from "../assets/images/image-asset.webp";
import { APPOWNER } from "../utils/utils.constants";
import { ProfileCard } from "../components/subcomponents/ProfileCard";
import { modalities, staffMembers } from "../utils/utils.statiquedata";

import { Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { LibraryDashboard } from "../components/Dashboardbibliotheque";
import { Colors } from "../utils/utils.colors";

const { Title } = Typography;

const columns: ColumnsType<ReglePret> = [
    {
        title: '#',
        dataIndex: 'id',
        key: 'key',
        align: 'center',
        width: 60,
        fixed: "left"
    },
    {
        title: "Catégorie d'usagers",
        dataIndex: 'categorie',
        key: 'categorie',
        align: 'left',
    },
    {
        title: "Nombre d'ouvrages",
        dataIndex: 'nombre_ouvrages',
        key: 'nombre_ouvrages',
        align: 'center',
        width: 180,
    },
    {
        title: 'Durée du prêt',
        dataIndex: 'duree_pret',
        key: 'duree_pret',
        align: 'left',
        className: "bg-primary-table"
    },
];

export const Library = () => {
    const [item, setItem] = useState<StaffMember>(staffMembers[5]);

    return (
        <>
            <BreadcrumpComponent
                imageCover={hero}
                title={`Bibliothèque`}
                subtitle={"La bibliothèque développe une collection de ressources imprimées et électroniques adaptée aux besoins documentaires des étudiants"}
            />

            <div className="row mt-5">
                <aside className="col-md-4 pe-md-5">
                    <ProfileCard
                        profile={item}
                        showDescription={false}
                    />
                    <SocialShare
                        post_name={"institut-metanoia"}
                    />

                    <div className="mt-5 pt-5">
                        <h2 className="h4 fw-bold mb-3">Voir aussi</h2>
                        <hr className="mb-3" />
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to={routes.KAUTA} className="text-decoration-none text-dark">Ecole primaire KAUTA</Link></li>
                            <li className="mb-2"><Link to={routes.KAUTA_MATERNEL} className="text-decoration-none text-dark">La Crèche</Link></li>
                        </ul>
                    </div>
                </aside>

                <main className="col-md-8">
                    <article className="entry-content">

                        {/* Profile */}
                        <h2 className="h4 fw-bold mb-3">Profil et Présentation et localisation de l’école</h2>
                        <p>
                            La bibliothèque développe une collection de ressources imprimées et électroniques adaptée aux besoins documentaires des étudiants,
                            enseignants- chercheurs et usagers désirant approfondir, développer, actualiser des connaissances disciplinaires,
                            scientifiques ou professionnelles. Le fonds documentaire est cohérent et actualisé dans les disciplines et leurs développements historiques, il propose pour celles-ci les titres fondamentaux et les sources principales
                        </p>
                        <hr className="my-4" style={{ opacity: 0.1 }} />
                        <h2 className="h4 fw-bold mb-3">Modalités d’emprunt</h2>
                        <Table
                            columns={columns}
                            dataSource={modalities}
                            pagination={false}
                            bordered
                            scroll={{ x: 'max-content' }}
                            size="middle"
                            components={{
                                header: {
                                    cell: (props: any) => (
                                        <th
                                            {...props}
                                            style={{
                                                ...props.style,
                                                background: Colors.primaryColor,
                                                color: Colors.whiteColor
                                            }}
                                        />
                                    )
                                }
                            }}
                        />
                        <hr className="my-4" style={{ opacity: 0.1 }} />
                        <h2 className="h4 fw-bold mb-3">Informations générales et règlements</h2>
                        <p>Tout ce qu'il faut savoir pour fréquenter et profiter de la bibliothèque de l'ULPGL</p>
                        <LibraryDashboard />
                        {/* Direction */}
                        <hr className="my-4" style={{ opacity: 0.1 }} />
                        <h2 className="h4 fw-bold mb-3">Direction</h2>
                        <h6>Eliezer BISIMWA MWONGANE</h6>

                        {/* Contacts */}
                        <hr className="my-4" style={{ opacity: 0.1 }} />
                        <h2 className="h4 fw-bold mb-3">Contacts</h2>
                        <ul>
                            <li><ContactLink value={"+243997775077"} /></li>
                            <li><ContactLink value={"eliezermwo@yahoo.fr"} /></li>
                        </ul>
                    </article>
                </main>
            </div>
            <Hrseparator />
        </>
    );
}