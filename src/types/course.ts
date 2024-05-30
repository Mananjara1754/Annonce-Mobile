import { Place } from "./place";

export default class Course {
    idCourse!: number;
    idChauffeur!: number;
    nomChauffeur!: string;
    prenomChauffeur!: string;
    idClient!: number;
    nomClient!: string;
    prenomClient!: string;
    depart!: Place;
    destination!: Place;
    date!: Date;
}