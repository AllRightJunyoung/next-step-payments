/* eslint-disable import/named */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormPage from '../../../pages/Form/FormPage';
export default {
  title: 'pages/FormPage',
  component: FormPage,
} as ComponentMeta<typeof FormPage>;

const Template: ComponentStory<typeof FormPage> = () => <FormPage />;

export const Default = Template.bind({});
