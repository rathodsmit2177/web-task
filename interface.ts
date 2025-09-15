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

export interface Products {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  images: string[];
  thumbnail: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  };
}

export interface Form {
  propertyname: string;
  groupname: string;
  address: string;
  price: string;
  configuration: string;
  size: string;
  launchdate: string;
  // property_name: string;
}

export interface Count {
  count: number;
  increase: number;
  decrease: number;
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
