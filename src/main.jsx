import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SaasProvider } from '@saas-ui/react'
import theme from "./theme.jsx";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev/index.js";
import { ColorModeScript } from '@chakra-ui/react'

// 2. Import the Saas UI theme

// 2. Extend the theme to include custom colors, fonts, etc


// example theme object


const rootElement = document.getElementById ('root')
ReactDOM.createRoot (rootElement).render (
  <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <SaasProvider theme={theme}>
      <DevSupport ComponentPreviews={ComponentPreviews}
                  useInitialHook={useInitial}
      >
<App/>
</DevSupport>
    </SaasProvider>
  </React.StrictMode>
)


