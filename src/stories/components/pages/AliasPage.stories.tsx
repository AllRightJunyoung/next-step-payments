/* eslint-disable import/named */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AliasPage from '../../../pages/Alias/AliasPage';

export default {
  title: 'pages/AliasPage',
  component: AliasPage,
} as ComponentMeta<typeof AliasPage>;

const Template: ComponentStory<typeof AliasPage> = () => <AliasPage />;

export const Default = Template.bind({});
