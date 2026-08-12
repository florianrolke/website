import { createRoot } from 'react-dom/client'
import { setWasmUrl } from '@lottiefiles/dotlottie-react'
import App from './App.tsx'
import './index.css'

// Serve the dotLottie WASM renderer same-origin (copied to public/ by scripts/copy-lottie-wasm.mjs)
// instead of the default cdn.jsdelivr.net/unpkg.com fetch — the site must stay 100% first-party.
setWasmUrl('/dotlottie-player.wasm')

createRoot(document.getElementById("root")!).render(<App />);
