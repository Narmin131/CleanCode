export interface myProps {
  title: string;
  description: string;
  thumbnail: string;
}

export interface myProduct {
  product: myProps;
}

export type productArray = myProps[]