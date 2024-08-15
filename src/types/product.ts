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
    title: string,
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
    view360Images: Image[]
}

export interface Common {
    _id: number,
    seller_id: number,
    price: number,
    quantity: number,
    show: boolean,
    active: boolean,
    name: string,
    mainImages: Image[],
    content: string,
}

export interface Product extends Common {
    extra: {
        isNew: boolean,
        isBest: boolean,
        category: string[],
        sort: number,
        content: string,
        detail: ModelDetails
    }
}

interface OptionDetail {
  name: string,
  price: number,
  images: Image[]
}

interface OptionItem {
  category: string[],
  topText: string,
  colors: OptionDetail[]
}

export interface OptionExterior extends Common {
  extra: {
    category: string[],
    exterior: {
      title: string,
      glossy: OptionItem,
      matte: OptionItem
    }
  }
}

// export interface Thumbnail {
//     title: string,
//     subtitle: string,
//     content: string,
//     image: Image
// }

// export interface ModelList extends Omit<Product, 'extra' | 'mainImages'> {
//     extra: {
//         category: string[],
//         models: Thumbnail[]
//     }
// }