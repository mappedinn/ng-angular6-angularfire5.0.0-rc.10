// all the interfaces will be declared in just one file to avoid having to load interfaces one by one.

export interface IUser {
    email: string;
    useId: string;
 }

 export interface IAuthData { // the needed data for getting the user connected
     email: string;
     password: string;
 }

 export interface IExercice {
     id: string;
     name: string;
     duration: number;
     calories: number;
     date?: Date;
     state?: 'completed' | 'cancelled' | null;
 }
