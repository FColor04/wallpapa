import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {withLinks} from "@storybook/addon-links";
import {Logo} from '../components/logo';

export default {
	title: 'Logo',
	component: Logo,
	decorators: [withLinks]
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	href: "./"
};
