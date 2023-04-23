/* eslint-disable import/named */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VirtualKeyBoard } from '../../../components/Domain';

export default {
  title: 'Domain/VirtualKeyBoard',
  component: VirtualKeyBoard,
} as ComponentMeta<typeof VirtualKeyBoard>;

const Template: ComponentStory<typeof VirtualKeyBoard> = (args) => <VirtualKeyBoard {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  ui: 'cvc',
};
