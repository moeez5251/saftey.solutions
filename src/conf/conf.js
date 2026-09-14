const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL || "https://cloud.appwrite.io/v1"),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID || "694fe401001100452570"),
};

export default conf;