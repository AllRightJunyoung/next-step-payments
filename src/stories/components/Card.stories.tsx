import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../../components/UI';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
  size: 'small',
  type: 'primary',
  id: '1',
  company: '토스카드',
  color: 'blue',
  expireMonth: '01',
  expireYear: '23',
  ownerName: '문준영',
};

export const BigPrimary = Template.bind({});
BigPrimary.args = {
  size: 'big',
  type: 'primary',
  id: '1',
  company: '토스카드',
  color: 'blue',
  expireMonth: '01',
  expireYear: '23',
  ownerName: '문준영',
};

export const AddCard = Template.bind({});
AddCard.args = {
  size: 'big',
  type: 'add',
};
