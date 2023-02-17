import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { GridContent, GridContentProps } from '.';
import imageHome from '../../assets/home.87217388.svg';
export default {
  title: 'GridContent',
  component: GridContent,
  args: {
    title: 'Boas vindas a Lacrei Saúde',
    text: 'Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+',
    src: imageHome,
  },
  argTypes: {
    title: { type: 'string' },
    text: { type: 'string' },
    src: { type: 'string' },
  },
}as Meta;

export const Template: Story<GridContentProps> = (args) => {
  return (
    <BrowserRouter>
      <GridContent {...args} />
    </BrowserRouter>
  );
};
