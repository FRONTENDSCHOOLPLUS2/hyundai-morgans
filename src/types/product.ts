interface Image {
  path: string;
  name: string;
  originalname: string;
}

interface Engine {
  title: string;
  '엔진 형식'?: string;
  '배터리 종류'?: string;
  '배터리 용량(kWh)'?: string;
  '구동 방식': string;
  '배기량(cc)': string;
  '최고 출력(PS/rmp)'?: string;
  '최고 출력(kW)'?: string;
  '최대 토크(kgf·m/rpm)': string;
  '연료 탱크 용량': string;
  '타이어(19〃)'?: string;
  '타이어(20〃)'?: string;
  '타이어(21〃)'?: string;
  '타이어(22〃)'?: string;
  image: Image;
  [key: string]: any;
}

export interface Subject {
  title: string;
  content: string;
  images: Image[];
}

export interface Spec {
  title: string;
  '전장(mm)': string;
  '전폭(mm)': string;
  '전고(mm)': string;
  '윤거 전(mm)': string;
  '윤거 후(mm)': string;
  engine: Engine[];
  images: Image[];
  [key: string]: any;
}

interface ModelDetails {
  abstract: Subject;
  exterior: Subject;
  interior: Subject;
  spec: Spec;
  view360Images: Image[];
}

export interface Common {
  _id: number;
  seller_id: number;
  price: number;
  quantity: number;
  show: boolean;
  active: boolean;
  name: string;
  mainImages: Image[];
  content: string;
}

export interface Product extends Common {
  extra: {
    isNew: boolean;
    isBest: boolean;
    category: string[];
    sort: number;
    content: string;
    detail: ModelDetails;
  };
}

export interface OptionDetail {
  name: string;
  price: number;
  images: Image[];
}

interface OptionItem {
  category: string[];
  topText: string;
  colors: OptionDetail[];
}

export interface OptionExterior extends Common {
  extra: {
    category: string[];
    exterior: {
      title: string;
      glossy: OptionItem;
      matte: OptionItem;
      [key: string]: any;
    };
  };
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
