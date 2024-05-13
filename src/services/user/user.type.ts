type TPayloadSignup = {
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    birthday: string,
    gender: boolean,
    role: string,
};

type TPayloadSignin = Pick<TPayloadSignup, "email" | "password">;