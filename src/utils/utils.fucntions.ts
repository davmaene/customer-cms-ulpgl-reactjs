/**
 * Mélange les éléments d'un tableau de manière aléatoire.
 * @param array Le tableau à mélanger (non modifié, une copie est retournée).
 * @returns Un nouveau tableau mélangé.
 */
export function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

// Fonction utilitaire pour tronquer le texte
export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}

// Random longNumber
export const randomNumber = (digits: number = 7): number => {
    const min = 10 ** (digits - 1);
    const max = 10 ** digits - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Capitalize a word
export const capitalizeFirstLetter = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Detects if a string is an email, phone number, or URL.
 */
export const checkInputFormat = (str: string): InputFormat => {
    const input = str.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const phoneRegex = /^\+?(\d[\d\-. ]+)?(\([\d\-. ]+\))?[\d\-. ]{6,14}$/;
    
    const urlRegex = /^(https?:\/\/)?([\w/.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;

    if (emailRegex.test(input)) return 'email';
    if (phoneRegex.test(input)) return 'phone';
    if (urlRegex.test(input)) return 'url';

    return 'unknown';
};