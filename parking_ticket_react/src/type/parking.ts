export interface Parking {
  _id?: string;
  title: string;
  carPlate: string;
  phone: string;
  duration: string;
  startsAt: string;
  expiresAt: string;
  occupied: boolean;
  charge?: string;
  updatedAt?: string;
}
