import { checkInputFormat } from "../../utils/utils.fucntions";

export const ContactLink = ({ value }: { value: string }) => {
    const format = checkInputFormat(value);
    
    switch (format) {
        case 'email': return <a className="text-decoration-none text-dark" href={`mailto:${value}`}>{value}</a>;
        case 'phone': return <a className="text-decoration-none text-dark" href={`tel:${value}`}>{value}</a>;
        case 'url':   return <a className="text-decoration-none text-dark" href={value.startsWith('http') ? value : `https://${value}`} target="_blank">{value}</a>;
        default:      return <span>{value}</span>;
    }
};