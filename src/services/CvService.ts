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
        var index = this.findEducationIndexById(cv, education.id)
        console.log(index)
        if (index > -1) {
            cv.education.splice(index, 1)
        }
    }

    findEducationIndexById(cv:CV, id:number) {
        var index = -1;
        cv.education.forEach((edu, i) => {
            if (edu.id == id) {
                index = i
            }
        })
        
        return index
    }

    printCv(cv:CV, writer:IWriterService) {
        writer.write(cv.introduction)

        cv.education.forEach(edu => {
            writer.write(edu.title)
        });
    }
}