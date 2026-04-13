export interface StudentSurveyQuestion {
    uuid: string;
    survey_uuid: string;
    question: string;
    question_type: string;
    mandatory: boolean;
    options?: { uuid: string; option: string; }[];
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface StudentSurvey {
    uuid: string;
    creator_uuid: string;
    title: string;
    description: string;
    target_program: string;
    start_date: string;
    end_date: string;
    max_attempts: number;
    questions: StudentSurveyQuestion[];
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface StudentResponseEntry {
    uuid: string;
    question_uuid: string;
    answer: string;
}

export interface StudentResponse {
    uuid: string;
    survey_uuid: string;
    entries: StudentResponseEntry[];
}

export interface StudentState {
    surveys: StudentSurvey[];
    total_surveys: number;
    responses: StudentResponse[];
    total_responses: number;
    loading: boolean;
    error: string | null;
    status: "pending" | "succeed" | "rejected";
    submitLoading: boolean;
    submitSuccess: boolean;
}