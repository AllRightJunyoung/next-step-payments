/* eslint-disable import/named */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddCard } from '../../../components/UI';
export default {
  title: 'UI/AddCard',
  component: AddCard,
} as ComponentMeta<typeof AddCard>;

const Template: ComponentStory<typeof AddCard> = (args) => <AddCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'blue',
  size: 'small',
};
