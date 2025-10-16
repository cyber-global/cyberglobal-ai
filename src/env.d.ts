declare namespace NodeJS {
  interface ProcessEnv {
    // Resend
    RESEND_API_KEY: string;

    // Cal.com
    NEXT_PUBLIC_CAL_URL: string;

    // Sentry
    SENTRY_AUTH_TOKEN: string;
    SENTRY_ORG: string;
    SENTRY_PROJECT: string;
    NEXT_PUBLIC_SENTRY_DSN: string;

    // Node environment
    NODE_ENV: "development" | "production" | "test";
  }
}

