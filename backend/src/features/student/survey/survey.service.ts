import { BadRequestException, Injectable } from "@nestjs/common";
import { StudentEntity } from "src/domain/entities/student/student.entity";
import { SurveyRepository } from "src/infrastructure/repository/survey.repo";

@Injectable()
export class SurveyService {
    constructor(
        private readonly surveyRepo: SurveyRepository
    ) { }

    async getStudentSurveys(user: StudentEntity, offset?: number, limit?: number) {
        const { data, total } = await this.surveyRepo.getStudentSurveys(user, offset, limit);
        return {
            data: data,
            message: "Fetched Surveyes"
        }
    }

} 