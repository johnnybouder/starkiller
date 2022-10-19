import { Story, Meta } from '@storybook/react';
import { FormEvent } from 'react';
import Documentation from '../storybook-utils/documentation';
import { Search, SearchSize } from './search';

export default {
  component: Search,
  title: 'Components/Search',
} as Meta;

const title = 'Search';
const whenToUse =
  'Search allows users to search for specific content if they know what search terms to use or can’t find desired content in the main navigation.';

const preventDefault = (event: FormEvent) => event.preventDefault();

export const StandardSearch: Story = () => {
  return <Search id="search1" onSearch={preventDefault} />;
};

StandardSearch.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const SmallSearch: Story = () => {
  return (
    <Search id="search1" size={SearchSize.Small} onSearch={preventDefault} />
  );
};

SmallSearch.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const BigSearch: Story = () => {
  return (
    <Search id="search1" size={SearchSize.Big} onSearch={preventDefault} />
  );
};

BigSearch.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
