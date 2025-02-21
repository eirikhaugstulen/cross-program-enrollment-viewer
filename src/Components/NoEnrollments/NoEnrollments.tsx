import React from 'react';
import i18n from "@dhis2/d2-i18n";
import styles from './NoEnrollments.module.css';

export const NoEnrollments = () => {
    return (
        <p className={styles.noEnrollments}>
            {i18n.t("This person has no other enrollments")}
        </p>
    );
}; 