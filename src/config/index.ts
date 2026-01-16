// This file contains all the basic configuration logic for the app server to work

type ServerConfig = {
    PORT: number
}




export const serverConfig: ServerConfig = {
    PORT: Number(Bun.env.PORT) || 3001
};