// / <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production"
    readonly NEXT_PUBLIC_DEBUG_ON: string
  }
}
