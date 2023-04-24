/* eslint-disable import/named */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PrimaryCard from '../../../components/UI/PrimaryCard/PrimaryCard';

export default {
  title: 'UI/PrimaryCard',
  component: PrimaryCard,
} as ComponentMeta<typeof PrimaryCard>;

const Template: ComponentStory<typeof PrimaryCard> = (args) => <PrimaryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'blue',
  company: '토스카드',
  size: 'small',
  number: '1234234234234',
  expireMonth: '',
  expireYear: '',
  ownerName: '준영',
};
