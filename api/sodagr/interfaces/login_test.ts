export interface LoginPayload {
  email: string;
  password: string;
}
export interface LoginPayloadWrongEmail {
  email: number;
  password: string;
}

export interface LoginPayloadWrongPassword {
  email: string;
  password: number;
}

export interface LoginPayloadWrongEmailPassword {
  email: boolean;
  password: boolean;
}

