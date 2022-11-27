interface ItemInfo {
  name: string,
  count: number,
  price: number,
  image: string,
  id: number
}

export interface MessageType {
  author: string,
  _id: string,
  message: string,
  datetime: string
}

export interface UserMutation {
  name: string,
  email: string,
  isActive: boolean,
  role: string,
}

export interface User {
  id: string;
  name: string,
  email: string,
  isActive: string,
  role: string,
}