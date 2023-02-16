import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { LogoLink, LogoLinkProps } from '.';
export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
  },
  argTypes: {
    text: { type: 'string' },
  },
} as Meta;

export const Template:Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <BrowserRouter>
        <LogoLink {...args} />
      </BrowserRouter>
    </div>
  );
};
