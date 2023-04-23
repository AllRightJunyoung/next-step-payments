/* eslint-disable import/named */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AliasPage from '../../../pages/Alias/AliasPage';
import { withReactContext } from 'storybook-react-context';
import { CardContext } from '../../../context/Card';

const mockCard = {
  cardNumbers: '12345678910111223',
  expireDate: {
    month: '12',
    year: '24',
  },
  ownerName: '문준영',
  company: '토스카드',
  alias: '',
  id: '1',
};

export default {
  title: 'pages/AliasPage',
  component: AliasPage,
  decorators: [
    withReactContext({
      Context: CardContext,
      initialState: {
        cardList: [mockCard],
      },
    }),
    ,
  ],
} as ComponentMeta<typeof AliasPage>;

const Template: ComponentStory<typeof AliasPage> = () => <AliasPage />;
