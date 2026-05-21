import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LoadingComponent } from "./subcomponents/LoadingComponent";

export const LoadingWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
            window.scrollTo(0, 0);
        }, 900);

        return () => clearTimeout(timer);
    }, [location]);

    if (loading) {
        return (
            <LoadingComponent />
        );
    }

    return <>{children}</>;
};
