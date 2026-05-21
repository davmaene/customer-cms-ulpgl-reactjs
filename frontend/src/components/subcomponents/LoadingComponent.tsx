import { Colors } from "../../utils/utils.colors"
import logo from '../../assets/logo.png';

export const LoadingComponent: React.FC = () => {
    return (
        <div
            className="loader-container"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: Colors.whiteColor,
            }}
        >
            <div className="spinner">
                <img src={logo} alt="Loading..." style={{ width: 80, height: 80 }} />
            </div>
            <div className="spinner mt-5">
                <span className="spinner spinner-border" style={{ color: Colors.darkColor }}></span>
            </div>
            <span style={{ color: Colors.darkColor, paddingTop: 20 }}>Veuillez patienter</span>
            <p style={{ color: Colors.darkColor, paddingTop: 10, fontWeight: 600, fontSize: 20 }}>Chargement en cours ...</p>
        </div>
    )
}