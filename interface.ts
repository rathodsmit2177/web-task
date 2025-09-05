export interface Property {
  _id: string;
  id: string;
  name: string;
  sellerDetails: {
    _id: string;
    companyName: string;
    type: number;
  };
  address: {
    address: string;
    area: string;
    city: string;
  };

  data: PropertyData;
}

export interface PropertyData {
  depositAmount: number;
  faq: string[];
  houseRules: string[];
  media: Media;
  detailToDisplay: DetailToDisplay;
}

export interface Data {
  _id: string;
  name: string;
}

export interface ItemStore {
  datas: Data[];
  addData: (data: Data) => void;
  removeData: (_id: string) => void;
  toggleData: (data: Data) => void;
}

export interface Media {
  images: MediaImage[];
  thumbnail: string;
}

export interface DetailToDisplay {
  price: string;
  address: string;
  companyName: string;
  companyNameForFooter: string;
}
