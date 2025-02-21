import React, { useState } from "react";
import i18n from "@dhis2/d2-i18n";
import styles from './Plugin.module.css';
import { EnrollmentOverviewProps } from "./Plugin.types";
import { WidgetCollapsible } from "./Components/WidgetCollapsible";
import { EnrollmentViewer } from "./Components/EnrollmentViewer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const PluginInner = (propsFromParent: EnrollmentOverviewProps) => {
    const [open, setOpen] = useState(true);

    const {
        programId,
        enrollmentId,
        orgUnitId,
        teiId,
        navigate,
    } = propsFromParent;

    return (
        <QueryClientProvider
            client={queryClient}
        >
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <WidgetCollapsible
                        header={i18n.t("Other programs")}
                        borderless={false}
                        open={open}
                        onOpen={() => setOpen(true)}
                        onClose={() => setOpen(false)}
                    >
                        <div className={styles.enrollmentContent}>
                            <EnrollmentViewer
                                programId={programId}
                                enrollmentId={enrollmentId}
                                orgUnitId={orgUnitId}
                                teiId={teiId}
                                navigate={navigate}
                            />
                        </div>
                    </WidgetCollapsible>
                </div>
            </div>
        </QueryClientProvider>
    )
}

export default PluginInner;
