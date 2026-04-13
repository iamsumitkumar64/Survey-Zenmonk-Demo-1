import { z } from "zod";

export const surveySchema = z.object({
    title: z.string().min(3, "Title is required"),
    description: z.string().min(5, "Description is required"),
    target_program: z.string().min(2, "Program is required"),
    start_date: z.string().min(1, "Start date is required"),
    end_date: z.string().min(1, "End date is required"),
    max_attempts: z.number().min(1, "Max attempts must be at least 1"),
});

export type SurveyFormData = z.infer<typeof surveySchema>;