import React, {PropsWithChildren} from 'react';
import {Header} from "../components/header";


export const Root = ({children}: PropsWithChildren) => (
	<>
		<Header/>
		{children}
	</>
);
