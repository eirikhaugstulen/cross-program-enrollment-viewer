import React from "react";
import { buildUrlQueryString } from "../../utils/buildURLQueryString";
import { useEnrollmentViewer } from "./useEnrollmentViewer";
import { EnrollmentList } from "../EnrollmentList";
import { LoadingSpinner } from "../LoadingSpinner";
import { NoEnrollments } from "../NoEnrollments/NoEnrollments";
import styles from './EnrollmentViewer.module.css';
import i18n from "@dhis2/d2-i18n";

type Props = {
    programId: string,
    enrollmentId: string,
    orgUnitId: string,
    teiId: string,
    navigate: (url: string) => void,
};

export const EnrollmentViewer = ({
    programId,
    orgUnitId,
    teiId,
    navigate,
}: Props) => {
    const {
        hasEnrollments,
        activeEnrollments,
        otherEnrollments,
        isError,
        isLoading,
        error,
    } = useEnrollmentViewer({ teiId, programId })

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (isError || error) {
        return <p>{i18n.t("Error loading enrollments")}</p>
    }

    if (!hasEnrollments || true) {
        return <NoEnrollments />
    }

    const handleEnrollmentClick = (enrollment: any) => {
        navigate(`enrollment?${buildUrlQueryString({
            programId: enrollment.programId,
            enrollmentId: enrollment.enrollment,
            orgUnitId,
            teiId,
        })}`)
    }

    return (
        <div className={styles.container}>
            <EnrollmentList
                activeEnrollments={activeEnrollments}
                otherEnrollments={otherEnrollments}
                orgUnitId={orgUnitId}
                teiId={teiId}
                onEnrollmentClick={handleEnrollmentClick}
            />
        </div>
    );
}
