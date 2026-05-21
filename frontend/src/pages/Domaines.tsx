import React from "react";
import { BreadcrumpComponent } from "../components/subcomponents/BreadcrumpCompont";
import { DomainesSection } from "../components/Domaines.component";
import bigCover from '../assets/images/big-cover.jpg';
import { APPOWNER } from "../utils/utils.constants";

export const Domaines: React.FC = () => {
    return (
        <>
            <BreadcrumpComponent
                imageCover={bigCover}
                subtitle={`A l'${APPOWNER} nous organisons une series de formations et des cours qui sont reparties en domaines qui sont aussi repartit en Facultes qui regroupent elles aussi des filieres `}
                title="Domaines et facultés"
            />
            <DomainesSection />
        </>
    )
}