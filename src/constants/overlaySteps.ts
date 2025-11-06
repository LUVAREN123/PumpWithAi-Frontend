export const forgotPasswordSteps = ['email', 'otp', 'reset'] as const;
export type ForgotPasswordStep = typeof forgotPasswordSteps[number];