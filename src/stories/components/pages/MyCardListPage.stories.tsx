import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyCardListPage } from '../../../pages/MyCardList';
export default {
  title: 'pages/MyCardListPage',
  component: MyCardListPage,
} as ComponentMeta<typeof MyCardListPage>;

const Template: ComponentStory<typeof MyCardListPage> = () => <MyCardListPage />;

export const Default = Template.bind({});
