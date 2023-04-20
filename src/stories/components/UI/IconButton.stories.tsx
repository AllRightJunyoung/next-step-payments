import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from '../../../components/UI';

export default {
  title: 'UI/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const LeftButton = Template.bind({});
LeftButton.args = {
  name: 'arrowLeft',
  size: '2x',
  color: 'black',
};
export const RemoveButton = Template.bind({});
RemoveButton.args = {
  name: 'remove',
  size: '2x',
  color: 'black',
};
export const modifyButton = Template.bind({});
modifyButton.args = {
  name: 'modify',
  size: '2x',
  color: 'black',
};
