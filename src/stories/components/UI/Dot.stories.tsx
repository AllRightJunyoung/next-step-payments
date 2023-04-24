/* eslint-disable import/named */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dot } from '../../../components/UI';
export default {
  title: 'UI/Dot',
  component: Dot,
} as ComponentMeta<typeof Dot>;

const Template: ComponentStory<typeof Dot> = (args) => <Dot {...args} />;

export const Default = Template.bind({});
