import { UserData } from "./user"

interface Image {
    path: string,
    name: string,
    originalname: string
}

interface Engine {
    title: string,
    model: string,
    drivetrain: string,
    displacement: string,
    power: string,
    torque: string,
    fueltank: string,
    tire18: string,
    tire19: string,
    tire20: string
}

interface Subject {
    titel: string,
    content: string,
    images: Image[]
}

interface Spec {
    title: string,
    content: string,
    length: string,
    width: string,
    height: string,
    fronttread: string,
    reartread: string,
    engine: Engine[],
    images: Image[]
}

interface ModelDetails {            
    abstract: Subject,
    exterior: Subject,
    interior: Subject,
    spec: Spec,
    view360: Image[]
}

export interface Product {
    _id: number,
    seller_id: number,
    price: number,
    quantity: number,
    name: string,
    mainImages: Image[]
    content: string,
    extra: {
        isNew: boolean,
        isBest: boolean,
        category: string[],
        sort: number,
        detail: ModelDetails
    }
}


