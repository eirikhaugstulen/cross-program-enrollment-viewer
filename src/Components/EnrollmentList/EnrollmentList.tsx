import React from "react";
import { Button } from "@dhis2/ui";
import styles from './EnrollmentList.module.css';
import i18n from "@dhis2/d2-i18n";

interface Enrollment {
    enrollment: string;
    programId: string;
    displayName: string;
}

interface EnrollmentListProps {
    activeEnrollments?: Enrollment[];
    otherEnrollments?: Enrollment[];
    orgUnitId: string;
    teiId: string;
    onEnrollmentClick: (enrollment: Enrollment) => void;
}

export const EnrollmentList: React.FC<EnrollmentListProps> = ({
    activeEnrollments = [],
    otherEnrollments = [],
    onEnrollmentClick,
}) => {
    const renderEnrollments = (enrollments: Enrollment[], title: string) => {
        if (!enrollments.length) return null;

        return (
            <div className={styles.enrollmentSection}>
                <h3 className={styles.sectionTitle}>{title}</h3>
                <div className={styles.enrollmentGrid}>
                    {enrollments.map((enrollment) => (
                        <div
                            key={enrollment.enrollment}
                            className={styles.enrollmentItem}
                        >
                            <Button
                                secondary
                                onClick={() => onEnrollmentClick(enrollment)}
                            >
                                {enrollment.displayName}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className={styles.container}>
            {renderEnrollments(activeEnrollments, i18n.t("Active enrollments"))}
            {renderEnrollments(otherEnrollments, i18n.t("Other enrollments"))}
        </div>
    );
}; 