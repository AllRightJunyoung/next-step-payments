import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../../../components/UI/Button/Button';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const XSmall = Template.bind({});
XSmall.args = {
  fontSize: 'xs',
  label: 'Next',
};

export const Small = Template.bind({});
Small.args = {
  fontSize: 's',
  label: 'Next',
};

export const Medium = Template.bind({});
Medium.args = {
  fontSize: 'm',
  label: 'Next',
};

export const Large = Template.bind({});
Large.args = {
  fontSize: 'lg',
  label: 'Next',
};
