import {useDataEngine} from "@dhis2/app-runtime";
import {useQuery} from "@tanstack/react-query";
import { useMemo } from "react";

type Props = {
    teiId: string;
    programId: string;
}

export const useEnrollmentViewer = ({ teiId, programId }: Props) => {
    const dataEngine = useDataEngine();

    const { data: programData } = useQuery({
        queryKey: ['programs'],
        queryFn: () => dataEngine.query({
            programs: {
                resource: 'programs',
                params: {
                    filter: 'programType:eq:WITH_REGISTRATION',
                    fields: 'id,name,style[color,icon]',
                }
            }
        }),
        select: (response: any) => response.programs.programs,
    });

    const { data: enrollmentData, isLoading, isError, error } = useQuery({
        queryKey: ['enrollments', teiId, programId],
        queryFn: () => dataEngine.query({
            enrollments: {
                resource: 'tracker/trackedEntities',
                id: teiId,
                params: {
                    trackedEntityType: 'nEenWmSyUEp',
                    ouMode: 'ACCESSIBLE',
                    fields: 'enrollments[*]',
                },
            }
        }),
        enabled: !!programData,
        select: (response: any) => {
            if (!response.enrollments.enrollments) return [];
            return response
                .enrollments
                .enrollments
                .filter((enrollment: any) => enrollment.program !== programId)
                .map(({ enrollment, status, program: enrollmentProgramId }: any) => {
                    const selectedProgram = programData?.find((program: any) => program.id === enrollmentProgramId);
                    return ({
                        enrollment,
                        programId: enrollmentProgramId,
                        displayName: selectedProgram?.name,
                        icon: {
                            color: selectedProgram?.style?.color,
                            icon: selectedProgram?.style?.icon,
                        },
                        status,
                    });
                });
        },
    });

    const {
        hasEnrollments,
        activeEnrollments,
        otherEnrollments,
    } = useMemo(() => {
        if (!enrollmentData) return {
            hasEnrollments: undefined,
            activeEnrollments: undefined,
            otherEnrollments: undefined,
        };

        const hasEnrollments = enrollmentData.length > 0;

        const { activeEnrollments, otherEnrollments } = enrollmentData.reduce((acc: any, enrollment: any) => {
            if (enrollment.status === 'ACTIVE') {
                acc.activeEnrollments.push(enrollment);
            } else {
                acc.otherEnrollments.push(enrollment);
            }
            return acc;
        }, { activeEnrollments: [], otherEnrollments: [] });

        return {
            hasEnrollments,
            activeEnrollments,
            otherEnrollments,
        };
    }, [enrollmentData]);

    return {
        hasEnrollments,
        activeEnrollments,
        otherEnrollments,
        isLoading,
        isError,
        error,
    }
}
