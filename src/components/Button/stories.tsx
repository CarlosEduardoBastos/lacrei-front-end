import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { Button, ButtonProps } from '.';
export default {
  title: 'Button',
  component: Button,
  args: {
    text: 'Pessoa Usuária',
    to: '/',
    background: true,
  },
  argTypes: {
    text: { type: 'string' },
    to: { type: 'string' },
  },
} as Meta;

export const Template:Story<ButtonProps> = (args) => {
  return (
    <BrowserRouter>
      <Button {...args} />
    </BrowserRouter>
  );
};
