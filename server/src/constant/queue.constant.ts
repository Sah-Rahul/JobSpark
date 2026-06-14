export const QUEUES = {
  EMAIL_VERIFICATION: "email_verification",
  WELCOME_EMAIL: "welcome_email",
  PASSWORD_RESET: "password_reset",
} as const;

export interface EmailVerificationPayload {
  email: string;
  fullName: string;
  token: string;
}

export interface PasswordResetPayload {
  email: string;
  fullName: string;
  token: string;
}

export interface WelcomePayload {
  email: string;     
  fullName: string;
  dashboardURL: string;
}
