import type {AppProps} from 'next/app'
import GlobalCss from "../public/global.css";
import {ThemeProvider} from "styled-components";
import {theme} from "../public/theme";
import {ProductsProvider} from "../components/productContext";

function MyApp({Component, pageProps}: AppProps) {
	return <ThemeProvider theme={theme}>
		<ProductsProvider>
			<GlobalCss/>
			<Component {...pageProps} />
		</ProductsProvider>
	</ThemeProvider>
}

export default MyApp
