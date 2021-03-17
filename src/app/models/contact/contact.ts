import { LocationId } from './location-id';
import { TutenUserClient } from './tuten-user-client';
export class Contact {
    adminemail!: string;
    email!: string;
    current!: boolean;
    app!: string;
    token!: string;
    //response
    bookingId!: string;
    firstName!: string;
    lastName!: string;
    bookingTime!: string;
    streetAddress!: string;
    bookingPrice!: string;
    tutenUserClient!: TutenUserClient;
    locationId!: LocationId;
}
