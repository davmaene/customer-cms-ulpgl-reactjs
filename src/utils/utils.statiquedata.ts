import { routes } from "./utils.routes";
import ab from '../assets/images/ab.png';
import adm from '../assets/images/adm.png';
import rec from '../assets/images/rec.png';
import aca from '../assets/images/aca.png';
import { APPCONTACTS, APPOWNER } from "./utils.constants";
import { randomNumber } from "./utils.fucntions";

export const faqs = [
    { number: "01.", question: "Où se situe l’ULPGL Goma ?", answer: "L’ULPGL Goma est située dans la ville de Goma," + APPCONTACTS.address },
    { number: "02.", question: "Quels sont les délais de dépôt des candidatures ?", answer: "Les inscriptions pour la rentrée académique se déroulent généralement entre août et octobre, selon le calendrier publié par l’université." },
    { number: "03.", question: "Comment puis-je m’inscrire à l’ULPGL Goma ?", answer: "Vous pouvez vous inscrire en vous rendant au secrétariat académique ou via la plateforme d’inscription en ligne lorsqu’elle est ouverte." },
    { number: "04.", question: "Quels documents sont requis pour l’inscription ?", answer: "Un diplôme d’État ou une attestation de réussite, une copie de la carte d'identité, quatre photos passeport et les frais d'inscription." },
    { number: "05.", question: "L’université propose-t-elle des bourses ou facilités de paiement ?", answer: "Oui, certaines bourses internes et des facilités de paiement peuvent être accordées selon les conditions fixées par l’administration." },
    { number: "06.", question: "Quels programmes sont offerts à l’ULPGL Goma ?", answer: "L’université propose plusieurs programmes en licence et master, notamment en informatique, économie, droit, médecine, théologie et sciences sociales." },
    { number: "07.", question: "Y a-t-il un test d’admission ?", answer: "Oui, certaines facultés organisent un test d’admission ou un entretien pour évaluer les compétences et la motivation du candidat." },
    { number: "08.", question: "Comment fonctionne le système LMD à l’ULPGL Goma ?", answer: "Le système LMD (Licence-Master-Doctorat) est appliqué via des cours en crédits, des travaux pratiques, des séminaires et des évaluations continues." },
    { number: "09.", question: "Disposez-vous d’un laboratoire informatique ?", answer: "Oui, l’ULPGL Goma possède plusieurs laboratoires, dont un laboratoire informatique moderne pour les travaux pratiques." },
    { number: "10.", question: "Proposez-vous un logement pour les étudiants ?", answer: "L’ULPGL Goma ne dispose pas de cités universitaires, mais oriente les étudiants vers des options de logement autour du campus." },
    { number: "11.", question: "Comment obtenir mon relevé de côtes ou attestation ?", answer: "Les documents académiques peuvent être retirés au secrétariat académique sur demande et après vérification du dossier." },
    { number: "12.", question: "Offrez-vous des cours en ligne ?", answer: "Oui, certaines formations utilisent une plateforme e-learning pour compléter les cours en présentiel." }
]

export const domainsData: Array<{ domaine: string; href: string; faculties: Array<{ faculte: string; href: string; filiaires: Array<{ filiere: string, profil?: string, responsable: StaffMember, saf: StaffMember }> }> }> = [
    {
        domaine: "Sciences et Technologies",
        href: "/sciences-et-technologies",
        faculties: [
            {
                faculte: "Faculté Sciences et Technologies",
                href: "/sciences-et-technologies",
                filiaires: [
                    {
                        filiere: "Sciences de l'Ingénieur",
                        profil: "",
                        saf: {
                            uuid: randomNumber(),
                            name: "Ir. Grace Muhiwa",
                            slug: "ir-grace-muhiwa",
                            role: "Sécretaire facultaire"
                        },
                        responsable: {
                            uuid: randomNumber(),
                            name: "Prof. Docteur Baraka Mushagi Olivier",
                            role: "Doyen de la faculte",
                            slug: "prof-docteur-baraka-mushagi-olivier",
                        }
                    }
                ]
            }
        ]
    },
    {
        domaine: "Sciences Économiques et de Gestion",
        href: "/sciences-economiques-et-de-gestion",
        faculties: [
            {
                faculte: "Faculté Sciences Économiques et de Gestion",
                href: "/sciences-economiques-et-de-gestion",
                filiaires: [
                    {
                        filiere: "Sciences Économiques",
                        profil: "",
                        saf: {
                            name: "Adolphe Kankisingi",
                            role: "Sécretaire facultaire",
                            slug: "adolphe-kankisingi",
                            uuid: randomNumber()
                        },
                        responsable: {
                            name: "Prof. Alain Kikandi",
                            role: "Doyen de la faculte",
                            slug: "prof-alain-kikandi",
                            uuid: randomNumber()
                        }
                    },
                    {
                        filiere: "Sciences de Gestion",
                        profil: "",
                        saf: {
                            name: "Adolphe Kankisingi",
                            role: "Sécretaire facultaire",
                            slug: "adolphe-kankisingi",
                            uuid: randomNumber()
                        },
                        responsable: {
                            name: "Prof. Alain Kikandi",
                            role: "Doyen de la faculte",
                            slug: "prof-alain-kikandi",
                            uuid: randomNumber()
                        }
                    }
                ]
            }
        ]
    },
    {
        domaine: "Sciences Psychologiques et de l'Éducation",
        href: "/sciences-psychologiques-et-de-leducation",
        faculties: [
            {
                faculte: "Faculté Sciences Psychologiques et de l'Éducation",
                href: "/sciences-psychologiques-et-de-leducation",
                filiaires: [
                    {
                        filiere: "Sciences Psychologiques",
                        profil: "",
                        saf: {
                            name: "Adolphe Kankisingi",
                            role: "Sécretaire facultaire",
                            slug: "adolphe-kankisingi",
                            uuid: randomNumber()
                        },
                        responsable: {
                            name: "Prof. Alain Kikandi",
                            role: "Doyen de la faculte",
                            slug: "prof-alain-kikandi",
                            uuid: randomNumber()
                        }
                    },
                    {
                        filiere: "Sciences de l'Éducation",
                        profil: "",
                        saf: {
                            name: "Adolphe Kankisingi",
                            role: "Sécretaire facultaire",
                            slug: "adolphe-kankisingi",
                            uuid: randomNumber()
                        },
                        responsable: {
                            name: "Prof. Alain Kikandi",
                            role: "Doyen de la faculte",
                            slug: "prof-alain-kikandi",
                            uuid: randomNumber()
                        }
                    }
                ]
            }
        ]
    },
    {
        domaine: "Sciences de la Santé",
        href: "/sciences-de-la-sante",
        faculties: [
            {
                faculte: "Faculté Sciences de la Santé",
                href: "/sciences-de-la-sante",
                filiaires: [
                    {
                        filiere: "Médecine Humaine",
                        profil: "",
                        saf: {
                            name: "Adolphe Kankisingi",
                            role: "Sécretaire facultaire",
                            slug: "adolphe-kankisingi",
                            uuid: randomNumber()
                        },
                        responsable: {
                            name: "Prof. Alain Kikandi",
                            role: "Doyen de la faculte",
                            slug: "prof-alain-kikandi",
                            uuid: randomNumber()
                        }
                    },
                    {
                        filiere: "Santé Publique",
                        profil: "",
                        saf: {
                            name: "Adolphe Kankisingi",
                            role: "Sécretaire facultaire",
                            slug: "adolphe-kankisingi",
                            uuid: randomNumber()
                        },
                        responsable: {
                            name: "Prof. Alain Kikandi",
                            role: "Doyen de la faculte",
                            slug: "prof-alain-kikandi",
                            uuid: randomNumber()
                        }
                    }
                ]
            }
        ]
    },
    {
        domaine: "Sciences Juridiques, Politiques et Administratives",
        href: "/sciences-juridiques-politiques-et-administratives",
        faculties: [
            {
                faculte: " Faculté Sciences Juridiques, Politiques et Administratives",
                href: "/sciences-juridiques-politiques-et-administratives",
                filiaires: [
                    {
                        filiere: "Sciences Juridiques",
                        profil: "",
                        saf: {
                            name: "Me. Samuel Kamasita",
                            role: "Sécretaire facultaire",
                            slug: "samuel-kamasita",
                            uuid: randomNumber()
                        },
                        responsable: {
                            name: "Prof. Mazmbi Riziki Pierre",
                            role: "Doyen de la faculte",
                            slug: "prof-mazambi-riziki-pierre",
                            uuid: randomNumber()
                        }
                    }
                ]
            }
        ]
    },
    {
        domaine: "Sciences de l'Homme et de la Société",
        href: "/sciences-de-lhomme-et-de-la-societe",
        faculties: [
            {
                faculte: "Faculté Sciences de l'Homme et de la Société",
                href: "/sciences-de-lhomme-et-de-la-societe",
                filiaires: [
                    {
                        filiere: "Théologie Protestante",
                        profil: "",
                        saf: {
                            uuid: randomNumber(),
                            name: "Pasteur Peter Ndaliko",
                            slug: "pasteur-peter-chirimwami",
                            role: "Sécretaire facultaire"
                        },
                        responsable: {
                            uuid: randomNumber(6),
                            name: "Prof. Kahindo Kavugo Verinique",
                            role: "Doyenne de faculté",
                            slug: "prof-kahindo-kavugo-veronique",
                            description: ""
                        }
                    }
                ]
            }
        ]
    }
];

export const centers: Center[] = [
    {
        flug: 'cripe',
        title: 'CRIPE',
        images: [],
        href: `${routes.CENTRES}/cripe`,
        domaineInterventions: ['Sciences Psychologiques et de l’Éducation'],
        description: 'Le CRIPE (Centre de Recherche en Psychologie et en Éducation) est un centre de recherche multidisciplinaire qui se consacre à l’étude des processus psychologiques et éducatifs. Il vise à comprendre les mécanismes d’apprentissage, les interactions sociales, et les facteurs influençant le développement humain. Le CRIPE mène des recherches innovantes pour améliorer les pratiques éducatives et promouvoir le bien-être psychologique.'
    },
    {
        flug: 'cieul',
        title: 'CIEUL',
        images: [],
        href: `${routes.CENTRES}/cieul`,
        domaineInterventions: ['Sciences de l’Éducation'],
        description: 'Le CIEUL (Centre Interdisciplinaire d’Études et de Recherche en Éducation) est un centre de recherche qui se concentre sur les questions éducatives contemporaines. Il vise à promouvoir l’innovation pédagogique et à soutenir les pratiques éducatives basées sur des données probantes.'
    },
    {
        flug: 'comite-ethique-recherche',
        title: 'Comité d’éthique de recherche',
        images: [],
        href: `${routes.CENTRES}/comite-ethique-recherche`,
        domaineInterventions: ['Éthique de la recherche'],
        description: 'Le Comité d’éthique de recherche est chargé d’évaluer les projets de recherche afin de garantir le respect des normes éthiques. Il veille à la protection des participants et à l’intégrité des recherches menées au sein de l’université.'
    },
    {
        flug: 'bersac',
        title: 'BERSAC',
        images: [],
        href: `${routes.CENTRES}/bersac`,
        domaineInterventions: ['Sciences de l’Éducation'],
        description: 'Le BERSAC (Bureau d’Études et de Recherche en Sciences de l’Éducation) est un centre de recherche qui se consacre à l’analyse des pratiques éducatives et à l’évaluation des politiques éducatives. Il vise à fournir des recommandations basées sur des données probantes pour améliorer le système éducatif.'
    },
    {
        flug: 'high-tech',
        title: 'High Tech',
        images: [],
        href: `${routes.CENTRES}/high-tech`,
        domaineInterventions: ['Technologies de l’information'],
        description: 'Le centre High Tech se concentre sur l’intégration des technologies de l’information dans l’éducation. Il vise à promouvoir l’utilisation des outils numériques pour améliorer l’apprentissage et l’enseignement.'
    },
    {
        flug: 'crega',
        title: 'CREGA',
        images: [],
        href: `${routes.CENTRES}/crega`,
        domaineInterventions: ['Sciences de l’Éducation'],
        description: 'Le CREGA (Centre de Recherche en Éducation et en Gestion des Apprenants) est un centre de recherche qui se concentre sur la gestion des apprenants et l’amélioration des pratiques éducatives. Il vise à soutenir les enseignants et les formateurs dans leur travail.'
    },
    {
        flug: 'caj-clinique-juridique',
        title: 'CAJ – Clinique juridique',
        images: [],
        href: `${routes.CENTRES}/caj-clinique-juridique`,
        domaineInterventions: ['Droit'],
        description: 'La Clinique juridique (CAJ) offre des services juridiques aux étudiants et à la communauté. Elle permet aux étudiants en droit de mettre en pratique leurs connaissances tout en aidant ceux qui en ont besoin.'
    },
    {
        flug: 'centre-de-recherche-en-didactique-universitaire',
        title: 'CRDU',
        images: [],
        href: `${routes.CENTRES}/centre-de-recherche-en-didactique-universitaire`,
        domaineInterventions: ['Droit'],
        description: 'Le CRDU (Centre de Recherche en Didactique Universitaire) se consacre à l’étude et à l’amélioration des pratiques d’enseignement supérieur. Il vise à soutenir les enseignants dans leur développement professionnel et à promouvoir l’innovation pédagogique.'
    },
    {
        flug: 'credda',
        title: 'CREDDA',
        images: [],
        direction: {
            slug: "prof-dr-kennedy-kihangi-bindu",
            uuid: '1',
            image: aca,
            name: 'Prof. Dr. Kennedy Kihangi Bindu',
            role: 'Directeur du CREDDA',
            description: "Le continent Africain est confronté à des crises (pauvreté, conflits armés, mauvaise gouvernance, violations massives des droits de l’homme et du droit international humanitaire, …) qui obligent sans atermoiement de solutions intelligentes africaines. Le caractère fragile des institutions étatiques postcoloniales doit être surmonté aussi urgemment que possible dans le sens du « le schéma et le plan directeur visant à transformer l’Afrique en puissance mondiale de l’avenir (Agenda 2063 de l’Union Africaine) ». Ces crises sont des opportunités à la portée de l’intelligentsia pour la promotion de la recherche, la paix et le développement. Une meilleure vie est encore possible en Afrique"
        },
        href: `${routes.CENTRES}/credda`,
        description: 'Le Centre de Recherche sur la Démocratie et le Développement en Afrique (CREDDA) est un cadre de réflexion regroupant l’élite intellectuelle africaine. Il sert de courroie de transmission entre la population et ses représentants pour promouvoir des solutions pratiques aux défis du développement.',
        domaineInterventions: [
            'Études et collectes des données',
            'Analyse des données',
            'Gestion et coordination des projets',
            'Partenariat | réseautage | networking'
        ],
        etudesRealisees: [
            'Vulgarisation sur l’éducation aux droits humains',
            'Programme d’anglais',
            'Monitoring judiciaire et pénitentiaire',
            'Sensibilisation sur la protection de l’environnement dans un contexte des conflits armés'
        ],
        partenaires: [
            'Uhaki safi programme de renforcement de la justice à l’Est',
            'Harvard humanitarian initiative',
            'Association des barreaux américains (ABA)'
        ],
        profile: "Lancé en 2008, le Centre de Recherche CREDDA-ULPGL s’est construit un agenda qui ne cesse de rencontrer les besoins de ses partenaires. Ses différentes expertises au service de toutes les bourses ne cessent de porter des résultats escomptés. Des universités, des Organismes internationaux, des Organisations de la Société Civile, des Associations membres des réseaux des jeunes et des femmes, des cours et tribunaux et des institutions d’appui à la démocratie bénéficient de notre accompagnement en vue d’affuter leurs stratégies de travail dans les domaines spécifiques. Des projets ont été réalisés avec succès par l’équipe professionnelle de CREDDA-ULPGL dans les domaines d’étude et collecte des données, d’analyse et traitement des données, de conception-élaboration-exécution-suivi et évaluation des projets. <br />Les atouts du CREDDA-ULPGL, en tant que cabinet-conseil et d’orientation dans les domaines de son intervention, forgent son agenda. À cela il faut ajouter l’organisation des séminaires et conférences, des formations professionnelles, et l’encadrement de la jeunesse. Au-delà, CREDDA/ULPGL est devenu une passerelle entre la population et les institutions publiques et privées en fournissant des données fiables et vérifiables renseignant des politiques publiques et des programmes des partenaires internationaux en vue de rencontrer les besoins sociaux de base des différentes couches de la population (les personnes déplacées, les personnes vivant avec handicap, les personnes des milieux défavorisés,…) pour le bien-être de toutes et de tous. Tout cela se réalise dans le respect strict de certaines règles de l’art, de l’éthique et de la déontologie professionnelle.",
        contacts: ['+243 824 174 956', 'www.credda-ulpgl.org']
    },
    {
        flug: 'cime',
        title: 'CIME',
        direction: {
            name: "Ir. Ajuamungu Muibombe Michael",
            role: "Directeur de la DNTIC et CIME",
            slug: "ir-ajuamungu-muibombe-michael",
            uuid: "8299282",
            description: "",
            email: ["ammichaj@ulpgl.net", "ammichaj@gmail.com"],
            phone: ["+243 997 841 542"],
        },
        images: [],
        href: `${routes.CENTRES}/cime`,
        domaineInterventions: ['Sciences de l’Éducation'],
        description: 'Le CIME (Centre Informatique et Management d\'entreprise) est un centre de recherche qui se consacre à l’innovation pédagogique. Il vise à développer de nouvelles approches et méthodes d’enseignement pour répondre aux besoins des apprenants.'
    },
    {
        flug: 'carepd',
        title: 'CAREPD',
        images: [],
        href: `${routes.CENTRES}/carepd`,
        domaineInterventions: ['Education à la paix', 'Renforcements des capacités des aumoniers FARDC', 'Ateliers tables rondes', 'conférences et colloques', 'Recherches et publications'],
        description: `Le centre Africain de Recherche et d’Education à la paix Démocratie à été créé en 1994 dans le contexte particulier de crise dans la Région des Grands Lacs : La fuite vers Goma en RDC de plus où moins 700.000  réfugiés rwandais. Ayant été effrayé par la situation déshumanisante et désesperée que menaient la plupart des refugiés (faim,violence etc)
                    La CAREPD fut ainsi créé en Septembre 1994 en tant que cadre de réflexion sur la paix avec une vocation éducative et thérapeutique visant la prévention des violences, la transformation des conflits et la guérison des victimes liées aux conflits dans la région des grands lacs africains`
    },
];

export const keyFacts: KeysFacts[] = [
    { title: `Année de création de l'${APPOWNER}`, value: '1985' },
    { title: 'Total d\'étudiant cette année', value: '5000' },
    { title: 'Nombre d\'étudiants internes dans les home', value: '15%' },
    { title: 'Nombre des campus (Campus Moise et Campus Salomon)', value: '2' },
    // { title: 'Gardens, greenspaces, playing fields and recreational zones', value: '25+' },
    { title: 'Nombre de professeurs permanents', value: '---' },
    // { title: 'living alumni, as of May 2022', value: '>200k' },
    { title: 'Nombre des dipolmes delivrés depuis la création', value: '---' },
];

export const staffMembers: StaffMember[] = [
    {
        uuid: '7',
        slug: "prof-dr-wasso-misona-joseph",
        name: "Prof. Dr. Wasso Misona Joseph",
        role: "Recteur",
        email: ['wassomisona.joseph@gmail.com', 'rectorat@ulpgl.net'],
        phone: ['---'],
        image: rec,
        description: "Professeur de Droit constitutionnel et administratif à la faculté de Droit",
        isOrganizer: true,
    },
    {
        uuid: '8',
        slug: "prof-dr-kennedy-kihangi-bindu",
        name: "Prof. Dr. Kennedy Kihangi Bindu",
        role: "Secrétaire Général Académique",
        email: ['sgac@ulpgl.net'],
        phone: ['+243 824 174 956'],
        image: aca,
        description: "Professeur de Droit International Public/Environnement, ressources naturelles, droits humains et justice internationale",
        isOrganizer: true,
    },
    {
        uuid: '9',
        slug: "prof-dr-muderhwa-barhatulirwa-vincent",
        name: "Prof. Dr. Muderhwa Barhatulirwa Vincent",
        role: "Secrétaire Général Administratif",
        email: ['sgadm@ulpgl.net'],
        phone: ['+243 997 034 096'],
        image: adm,
        description: "Professeur Ordinaire Exégèse du Nouveau Testament, littérature johannique",
        isOrganizer: true,
    },
    {
        uuid: "8299282",
        name: "Ir. Ajuamungu Muibombe Michael",
        role: "Directeur de la DNTIC et CIME",
        slug: "ir-ajuamungu-muibombe-michael",
        description: "",
        email: ["ammichaj@ulpgl.net", "ammichaj@gmail.com"],
        phone: ["+243 997 841 542"],
    },
    {
        uuid: '10',
        slug: "mm-kahindo-nzuva-claudine",
        name: "Mm. Kahindo Nzuva Claudine",
        role: "Administrateur du budget",
        email: ['kahindo.nzuva@ulpgl.net'],
        phone: ['+243 993 073 067'],
        image: ab,
        description: "",
        isOrganizer: true,
    },
    {
        uuid: '1',
        name: 'Prof. Aaron Lulu Phd.',
        slug: "prof-aaron-lulu-phd.",
        role: 'Directeur de Cabinet du Recteur',
        email: ['rectorat@ulpgl.net'],
        phone: ['+243 820 096 103', '+243 975 925 765'],
        extra: {
            bibliography: "Chef du cabinet du recteur de l'Ulpgl-Goma",
            publications: [
                "Influence des organisations syndicales des travailleurs sur le marché du travail en RDC. Vérification empirique au sein des entreprises publiques, Thèse de doctorat, Université Protestante au Congo, Février, 2020",
                "Déterminants de l’adhésion aux syndicats des travailleurs au sein des entreprises publiques en RDC, Mémoire de Maîtrise, avril 2017"
            ],
            researchInterests: [
                "Économie Monétaire",
                "Gestion économique",
            ]
        }
    },
    {
        uuid: '2',
        slug: "anny-kavira-baha",
        name: 'Anny KAVIRA BAHA',
        role: 'Directrice chargée des relations publiques et Protocole',
        email: ['relationpublique@ulpgl.net'],
        phone: ['+243 998 668 267']
    },
    {
        uuid: '3',
        slug: "prof-dr-mbambu-eduige",
        name: 'Prof. Dr.  Mbambu Eduige',
        role: 'Cabinet du Secrétariat Général Académique',
        email: ['sgac@ulpgl.net'],
        phone: ['+243 990 217 005'],
        extra: {
            bibliography: "Cabinet du Secrétariat Général Académique de l'Ulpgl-Goma",
        }
    },
    {
        uuid: '4',
        slug: "ir-kubuya-david-d-maene",
        name: 'Ir. Kubuya David D. Maene',
        role: 'Chargé de Communication et de developpement',
        email: ['davidmaene@ulpgl.net'],
        phone: ['+243 970 284 772', '+243 851 781 205'],
        extra: {
            bibliography: "Chargé de Communication et administration site web de l'Ulpgl-Goma",
            researchInterests: [
                "Communication digitale",
                "Gestion de contenu web",
            ],
            cv: "https://davmaene.github.io"
        }
    },
    {
        uuid: '5',
        slug: "mm-muzenga-manayala-rosette",
        name: 'Munzenga Manayala Rosette',
        role: 'Directrice de la scolarité',
        email: ['apparitoratcentral@ulpgl.net'],
        phone: ['+243 970 912 246']
    },
    {
        uuid: randomNumber(),
        name: "Pasteur Peter Ndaliko",
        slug: "pasteur-peter-chirimwami",
        role: "Sécretaire facultaire"
    },
    {
        uuid: randomNumber(6),
        name: "Prof. Kahindo Kavugo Verinique",
        role: "Doyenne de faculté",
        slug: "prof-kahindo-kavugo-veronique",
        description: ""
    }
];

export const thisAcademicYear = new Date().getFullYear() - 1 + '-' + (new Date().getFullYear());

export const activities: Activity[] = [
    {
        id: 1,
        name: "Communiqués et appel d'offres",
        category: "Événements",
        description: "Découvrez les derniers communiqués et appels d'offres de l'ULPGL pour rester informé des opportunités et des annonces importantes.",
        link: "/evenements/appel-d-offres"
    },
    {
        id: 2,
        name: "Horaires des cours",
        category: "Événements",
        description: "Découvrez les horaires de nos cours pour planifier votre emploi du temps.",
        link: "/evenements/horaires-des-cours"
    },
    {
        id: 3,
        name: "Calendrier académique",
        category: "Événements",
        description: "Consultez notre calendrier académique pour ne rien manquer des dates importantes.",
        link: "/evenements/calendrier-academique"
    },
    {
        id: 3,
        name: "Activités culturelles et sportives",
        category: "Événements",
        description: "Consultez notre calendrier des activités culturelles et sportives pour ne rien manquer.",
        link: "/evenements/activites-culturelles-et-sportives"
    },
    {
        id: 3,
        name: "Activités spirituelles",
        category: "Événements",
        description: "Consultez notre calendrier des activités spirituelles pour ne rien manquer.",
        link: "/evenements/activites-spirituelles"
    }
];

export const posts: Post[] = [
    {
        id: 1,
        post_author: "It Support",
        post_date: "2026-03-28 12:00:00",
        post_date_gmt: "2026-03-28 11:00:00",
        post_title: "L'essor de l'Intelligence Artificielle en 2026",
        post_content: "<p>L'IA continue de transformer nos workflows quotidiens...</p>",
        post_category: "Technologie",
        post_excerpt: "Découvrez comment l'IA redéfinit la productivité cette année.",
        post_status: "publish",
        comment_status: true,
        ping_status: "open",
        post_name: "essor-ia-2026",
        post_modified: "2026-03-28 12:15:00",
        post_type: "post",
        comment_count: 12,
        post_image: "https://picsum.photos/id/10/800/600"
    },
    {
        id: 2,
        post_author: "It Support",
        post_date: "2026-03-25 09:30:00",
        post_date_gmt: "2026-03-25 08:30:00",
        post_title: "Design Minimaliste : Moins c'est Mieux",
        post_content: "<p>Le minimalisme n'est pas qu'une esthétique, c'est une philosophie...</p>",
        post_category: "Design",
        post_excerpt: "Pourquoi le design épuré reste la tendance majeure du web.",
        post_status: "publish",
        comment_status: false,
        ping_status: "closed",
        post_name: "design-minimaliste",
        post_type: "post",
        comment_count: 5,
        post_image: "https://picsum.photos/id/20/800/600"
    },
    {
        id: 3,
        post_author: "It Support",
        post_date: "2026-03-20 15:45:00",
        post_date_gmt: "2026-03-20 14:45:00",
        post_title: "Guide de survie du développeur moderne",
        post_content: "<p>Apprendre à apprendre est la compétence ultime...</p>",
        post_category: "Développement",
        post_excerpt: "Les outils et méthodes pour ne pas être dépassé en programmation.",
        post_status: "publish",
        comment_status: true,
        ping_status: "open",
        post_name: "guide-survie-dev",
        post_type: "post",
        comment_count: 24,
        post_image: "https://picsum.photos/id/30/800/600"
    }
];

export const categoriesArticles = [
    { name: "Technologie", href: "/categories/technologie" },
    { name: "Design", href: "/categories/design" },
    { name: "Développement", href: "/categories/developpement" },
    { name: "Culture", href: "/categories/culture" },
    { name: "Éducation", href: "/categories/education" },
    { name: "Santé", href: "/categories/sante" },
];