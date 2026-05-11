export const SocialShare = ({ post_name }: { post_name: string }) => {
    const iconStyle = { color: '#6C6C77' };
    return (
        <div className="social-sharing py-3">
            <p className="text-secondary small mb-2"><strong>Partagez sur </strong></p>
            <ul className="list-unstyled d-flex gap-3">
                <li>
                    <a href="#" style={iconStyle} aria-label="Facebook">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" /></svg>
                    </a>
                </li>
                <li>
                    <a href="#" style={iconStyle} aria-label="X">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.868 21h5.245l-7.131-10.378Zm-2.128 2.474-.697-.997-5.543-7.93H8l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787Z" /></svg>
                    </a>
                </li>
                {/* Ajoutez les autres icônes ici de la même manière */}
            </ul>
        </div>
    );
};