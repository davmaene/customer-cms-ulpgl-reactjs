import React from 'react';

export const Library = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8 text-gray-800">
            {/* Titre principal */}
            <header className="text-center mb-10">
                <h1 className="text-4xl font-bold text-blue-900 mb-2">
                    Bibliothèque
                </h1>
                <p className="text-xl text-gray-600">
                    Université Libre des Pays des Grands Lacs (ULPGL)
                </p>
            </header>

            {/* Description du fonds documentaire */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Fonds documentaire</h2>
                <p className="text-lg leading-relaxed">
                    La bibliothèque développe une collection de ressources imprimées et électroniques adaptée aux besoins documentaires des étudiants, enseignants-chercheurs et usagers désirant approfondir, développer, actualiser des connaissances disciplinaires, scientifiques ou professionnelles.
                    Le fonds documentaire est cohérent et actualisé dans les disciplines et leurs développements historiques, il propose pour celles-ci les titres fondamentaux et les sources principales.
                </p>
            </section>

            {/* Horaires */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Horaires</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Campus Moïse */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-blue-800">Campus Moïse</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li><strong>Du Lundi au Vendredi :</strong> 8h – 12h / 13h – 20h</li>
                            <li><strong>Samedi :</strong> 9h – 14h</li>
                            <li className="text-red-600"><strong>Dimanche :</strong> Fermée</li>
                        </ul>
                    </div>

                    {/* Campus Salomon */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-blue-800">Campus Salomon</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li><strong>Du Lundi au Vendredi :</strong> 8h – 12h / 13h – 18h30</li>
                            <li><strong>Samedi :</strong> 9h – 14h</li>
                            <li className="text-red-600"><strong>Dimanche :</strong> Fermée</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Catalogue */}
            <section className="mb-12 bg-blue-50 border border-blue-100 rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-4">Catalogue de la Bibliothèque Universitaire</h2>
                <p className="mb-6 text-lg">
                    Le catalogue collectif en ligne répertorie environ <strong>14 000 livres imprimés</strong> et près de <strong>640 livres électroniques</strong>.
                </p>
                <a
                    href="http://bibliotheque.ulpgl.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition"
                >
                    Accéder au catalogue →
                </a>
            </section>

            {/* Chiffres-clés */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Chiffres-clés</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <p className="text-3xl font-bold text-blue-900">29 000</p>
                        <p className="text-gray-600">documents au total</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <p className="text-3xl font-bold">14 962</p>
                        <p className="text-gray-600">livres imprimés</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <p className="text-3xl font-bold">3 420</p>
                        <p className="text-gray-600">travaux universitaires</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <p className="text-3xl font-bold">10 014</p>
                        <p className="text-gray-600">périodiques imprimés</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <p className="text-3xl font-bold">1 231</p>
                        <p className="text-gray-600">livres électroniques</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <p className="text-3xl font-bold">80</p>
                        <p className="text-gray-600">places assises</p>
                    </div>
                </div>
            </section>

            {/* Inscription */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">S'inscrire à la Bibliothèque</h2>
                <div className="space-y-6 text-lg">
                    <div>
                        <h3 className="font-semibold text-blue-800">Étudiants ULPGL</h3>
                        <p>Présentez-vous à la bibliothèque après avoir payé vos droits d’inscription. Votre carte d’étudiant sert pour le prêt.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-blue-800">Autres lecteurs</h3>
                        <p>Inscription sur place avec pièce d’identité. Les tarifs varient selon votre catégorie.</p>
                    </div>
                </div>
            </section>

            {/* Modalités d'emprunt */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Modalités d’emprunt</h2>

                <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left">#</th>
                                <th className="border p-3 text-left">Ouvrages</th>
                                <th className="border p-3 text-left">Nombre</th>
                                <th className="border p-3 text-left">Durée du prêt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="border p-3">1</td><td className="border p-3">Étudiants G et L</td><td className="border p-3">3</td><td className="border p-3">14 jours</td></tr>
                            <tr><td className="border p-3">2</td><td className="border p-3">Étudiants M, D</td><td className="border p-3">4</td><td className="border p-3">21 jours</td></tr>
                            <tr><td className="border p-3">3</td><td className="border p-3">Enseignants</td><td className="border p-3">4</td><td className="border p-3">30 jours</td></tr>
                            <tr><td className="border p-3">4</td><td className="border p-3">Personnels de l’Université</td><td className="border p-3">2</td><td className="border p-3">14 jours</td></tr>
                            <tr><td className="border p-3">5</td><td className="border p-3">Personnes extérieures</td><td className="border p-3">5</td><td className="border p-3">Consultation sur place</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* Tableau Périodiques */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left">#</th>
                                <th className="border p-3 text-left">Périodiques</th>
                                <th className="border p-3 text-left">Nombre de vol.</th>
                                <th className="border p-3 text-left">Durée de prêt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-3">1</td>
                                <td className="border p-3">Étudiants M, D et Enseignants de l’ULPGL</td>
                                <td className="border p-3">3</td>
                                <td className="border p-3">Du soir 16h au lendemain matin 10h</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Contact Bibliothécaire */}
            <section className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-semibold mb-6">Contact</h2>
                <div>
                    <p className="font-semibold">Eliezer BISIMWA MWONGANE</p>
                    <p className="text-lg">Bibliothécaire en chef</p>
                    <p className="mt-2">
                        <strong>Tél :</strong> +243 997 775 077<br />
                        <strong>Email :</strong> eliezermwo@yahoo.fr
                    </p>
                </div>
            </section>

            {/* Liens utiles */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">Liens utiles</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    <a href="http://bibliotheque.ulpgl.net/" className="block p-4 border rounded-lg hover:bg-gray-50">📚 Catalogue en ligne</a>
                    <a href="#" className="block p-4 border rounded-lg hover:bg-gray-50">Bibliothèque numérique</a>
                    {/* Ajoute les autres liens externes ici */}
                </div>
            </section>
        </div>
    );
};