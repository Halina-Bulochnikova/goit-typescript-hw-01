type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const formParams: Params = {
  email: 'halina"gmail.com',
  firstName: "Halina",
  lastName: "Bulochnikova",
  phone: "656487609",
};

console.log(formParams);
