/* eslint-disable import/named */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { KeyBoardIconTooltip } from '../../../components/UI';
import styled from 'styled-components';
export default {
  title: 'UI/KeyBoardIconTooltip',
  component: KeyBoardIconTooltip,
} as ComponentMeta<typeof KeyBoardIconTooltip>;

const Template: ComponentStory<typeof KeyBoardIconTooltip> = (args) => (
  <Layout>
    <KeyBoardIconTooltip {...args} />
  </Layout>
);
export const Default = Template.bind({});

const Layout = styled.div`
  margin: 50px;
`;
Default.args = {};
