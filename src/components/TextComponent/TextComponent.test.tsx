import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>text</TextComponent>);
    expect(screen.getByText('text')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>text</TextComponent>);
    expect(container).toMatchSnapshot();
  });
});
