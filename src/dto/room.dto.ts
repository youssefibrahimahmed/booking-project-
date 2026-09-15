export interface Room {
    id: number;
    name: string;
    description: string;
    image: string;
    address: string;
    amenities: string;
    capacity: number;
    square_feet: number;
    price_per_hour: number;
    available: boolean;
    created_at: string | null;
}