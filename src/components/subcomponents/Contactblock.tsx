import { Colors } from "../../utils/utils.colors";

export const ContactBlock = ({ icon, label, value }: any) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '4px', color: Colors.redColor }}>{icon}</div>
        <div style={{ fontSize: '13px' }}>
            <div style={{ color: '#777' }}>{label}</div>
            <div style={{ fontWeight: 'bold' }}>{value}</div>
        </div>
    </div>
);