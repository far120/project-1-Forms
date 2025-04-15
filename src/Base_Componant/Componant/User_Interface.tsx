export  interface UserData {
    id?: string;
    username?: string;
    email: string;
    age?: number; 
    address?: string; 
    password: string;
    confirmPassword?: string;
    IsloggedIn?: boolean;
    isAdmin?: boolean;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Props {
     formData: UserData;
      setformData: React.Dispatch<React.SetStateAction<UserData>> 
    }
