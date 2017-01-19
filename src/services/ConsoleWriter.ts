import { IWriterService } from "../infrastructure/Services/IWriterService"

export class ConsoleWriter implements IWriterService {
    write(text:string) {
        console.log(text)
    }
}