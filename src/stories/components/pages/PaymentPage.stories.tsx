/* eslint-disable import/named */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaymentPage } from '../../../pages/Payment';

export default {
  title: 'pages/PaymentPage',
  component: PaymentPage,
} as ComponentMeta<typeof PaymentPage>;

const Template: ComponentStory<typeof PaymentPage> = () => <PaymentPage />;

export const Default = Template.bind({});
