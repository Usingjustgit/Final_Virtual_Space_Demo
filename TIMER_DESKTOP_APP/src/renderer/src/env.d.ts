/// <reference types="vite/client" />

// src/global.d.ts
import 'react'

declare module 'react' {
  interface CSSProperties {
    webkitAppRegion?: string
  }
}
