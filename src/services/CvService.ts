import { CV } from '../models/CV'
import { Education } from '../models/Education'
import { IWriterService } from '../infrastructure/Services/IWriterService'

export class CvService {

    addIntroduction(cv:CV, introduction:string) {
        cv.introduction = introduction
    }

    addEducation(cv:CV, education:Education) {
        cv.education.push(education)
    }

    removeEducation(cv:CV, education:Education) {
        // todo
    }

    printCv(cv:CV, writer:IWriterService) {
        console.log(cv.introduction)

        cv.education.forEach(edu => {
            console.log(edu.title)
        });
    }
}