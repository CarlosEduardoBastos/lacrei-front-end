
import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { Link, LinkProps } from '.';
export default {
  title: 'Link',
  component: Link,
  args: {
    text: 'Link',
    to: '/',
  },
  argTypes: {
    text: { type: 'string' },
    to: { type: 'string' },
  },
}as Meta;

export const Template: Story<LinkProps> = (args) => {
  return (
    <BrowserRouter>
      <Link {...args} />
    </BrowserRouter>
  );
};
