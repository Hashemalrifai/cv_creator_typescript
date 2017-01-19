import { CV } from "./src/models/CV"
import { Education } from "./src/models/Education"
import { CvService } from "./src/services/cvService"
import { ConsoleWriter } from "./src/services/consoleWriter"

(function startup() {
    var cvService = new CvService()

    var cv = new CV()

    cvService.addIntroduction(cv, "Hello introduction!")

    var edu1 = new Education()
    edu1.title = "Secondary School"
    cvService.addEducation(cv, edu1)

    var edu2 = new Education()
    edu2.title = "Univ."
    cvService.addEducation(cv, edu2)

    cvService.printCv(cv, new ConsoleWriter())
})()