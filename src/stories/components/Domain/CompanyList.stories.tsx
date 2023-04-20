import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompanyListModal } from '../../../components/Domain';
export default {
  title: 'Domain/CompanyListModal',
  component: CompanyListModal,
} as ComponentMeta<typeof CompanyListModal>;

const Template: ComponentStory<typeof CompanyListModal> = (args) => <CompanyListModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
