import { Colors } from "../utils/utils.colors";
import { ApplyButton } from "./subcomponents/ApplyHeaderButton";
import { ContactBlock } from "./subcomponents/Contactblock";
import { Logo } from "./subcomponents/Logo";
import { MainNavigation } from "./subcomponents/Navigation";
import { TopNavigation } from "./subcomponents/TopNavigationButton";
import { FaMapMarker } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { GiPhone } from "react-icons/gi";

const MarkerIcon = FaMapMarker as any;
const EnvelopeIcon = FaEnvelope as any;
const PhoneIcon = GiPhone as any;

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      {/* 1. TOP BAR (Bleu Marine) */}
      <div className="top-bar" style={{ backgroundColor: Colors.primaryColor, color: 'white', padding: '10px 50px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
          <TopNavigation />
          <div className="top-right-actions" style={{ display: 'flex', gap: '20px' }}>
            {/* <span>Login / Register</span> */}
            <span>FAQ</span>
            <span>🇺🇸</span>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE BAR (Logo + Contact Infos) */}
      <div className="middle-bar" style={{ padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
        <Logo />
        <div className="contact-info-blocks" style={{ display: 'flex', gap: '40px' }}>
          <ContactBlock icon={<MarkerIcon />} label="Addresse" value="Avenue du Lac, N°2 Quartier Himbi II, C. Goma, V. Goma" />
          <ContactBlock icon={<EnvelopeIcon />} label="Email" value="mailinfo@example.com" />
          <ContactBlock icon={<PhoneIcon />} label="Téléphone" value="+01 123 456 789" />
        </div>
      </div>

      {/* 3. MAIN NAVIGATION BAR */}
      <div className="main-nav-container" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa', borderBottom: '1px solid #eee' }}>
        <div style={{ backgroundColor: '#001529', color: 'white', padding: '15px 30px', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>Get More Info</span>
          <span>→</span>
        </div>
        <div style={{ flex: 1, paddingLeft: '20px' }}>
          <MainNavigation />
        </div>
        <div className="search-area" style={{ padding: '0 20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <input type="text" placeholder="Search..." style={{ border: 'none', background: 'transparent' }} />
          <span style={{ backgroundColor: '#d63384', color: 'white', padding: '15px' }}>::</span>
        </div>
      </div>
    </header>
  );
};

// export const Header: React.FC = () => {
//   return (
//     <header className="site-header wp-block-template-part">
//       <div className="wp-block-group alignfull is-style-default has-global-padding is-layout-constrained wp-container-core-group-is-layout-9f697be6 wp-block-group-is-layout-constrained"
//         style={{ marginTop: '0px', paddingTop: '20px', paddingRight: '30px', paddingBottom: '30px', paddingLeft: '30px' }}>
//         <TopNavigation />
//         <hr
//           className="wp-block-separator has-text-color has-lightgrey-color has-alpha-channel-opacity has-lightgrey-background-color has-background is-style-wide"
//           style={{ marginTop: '15px', marginBottom: '0px' }}
//         />
//         <div className="wp-block-group is-content-justification-space-between is-nowrap is-layout-flex wp-container-core-group-is-layout-cb46ffcb wp-block-group-is-layout-flex">
//           <Logo />
//           <MainNavigation />
//           <ApplyButton canBeShown={false} />
//         </div>
//       </div>
//     </header>
//   );
// };

