import { CV } from "./models/CV"
import { Education } from "./models/Education"
import { CvService } from "./services/cvService"
import { ConsoleWriter } from "./services/consoleWriter"

(function startup() {
    console.log("App Starting")
    
    var cv = new CV()

    var cvService = new CvService()
    cvService.addIntroduction(cv, "Hello introduction")

    var edu1 = new Education()
    edu1.title = "Secondary School"
    cvService.addEducation(cv, edu1)

    cvService.printCv(cv, new ConsoleWriter())
})()