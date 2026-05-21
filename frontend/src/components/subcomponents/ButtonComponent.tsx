import { Colors } from "../../utils/utils.colors";

export const ButtonComponent: React.FC<{ label: string, onClick: () => void, icon?: React.ReactNode }> = ({ label, onClick, icon }) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: Colors.redColor,
                color: Colors.whiteColor,
                padding: '0 20px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            {icon}
            {label}
        </button>
    );
}