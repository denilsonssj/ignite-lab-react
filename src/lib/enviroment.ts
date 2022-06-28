interface ImportMetaEnv {
    readonly VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

export const apiURL: string = import.meta.env.VITE_API_URL as string || '';

export const apiAccessToken: string = import.meta.env.VITE_API_ACCESS_TOKEN as string || '';