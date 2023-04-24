/* eslint-disable import/named */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HelpIconTooltip } from '../../../components/UI';
import styled from 'styled-components';
export default {
  title: 'UI/HelpIconTooltip',
  component: HelpIconTooltip,
} as ComponentMeta<typeof HelpIconTooltip>;

const Template: ComponentStory<typeof HelpIconTooltip> = (args) => (
  <Layout>
    <HelpIconTooltip {...args} />
  </Layout>
);
export const Default = Template.bind({});

const Layout = styled.div`
  margin: 20px;
`;
Default.args = {};
