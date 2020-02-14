import * as moment from 'moment';
import { readFile } from "fs";
moment.locale('pt-br')

cont jsonFileName: string = "calendarData.json"

type event = {
    name: string;
    desciption: string;
    startEvent: Date;
    endEvent: Date;
}

type eventsFile = {
    eventsList: event[]
}

const getEvents = async () => {
    const readEventsPromise = new Promise ((resolve, reject) => {
        readFile(jsonFileName, (err: Error, data: Buffer) => {
            if(err) {
                reject(err);
                return;
            }
            console.log(data);
            resolve(data.toString());
        });
    });

    const jsonContent: string = await readEventsPromise;

    const eventsObject = JSON.parse(jsonContent);
    return eventsObject;
};

getEvents().then((eventsObject: any) => console.log(eventsObject.eventsList))