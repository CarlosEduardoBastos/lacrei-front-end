import { screen } from '@testing-library/react';
import { Button } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Button />', () => {
  it('should render with default values', () => {
    renderTheme(<Button text="Button" to="/" />);
    expect(screen.getByRole('link', { name: 'Button' })).toHaveStyle({ background: theme.colors.primaryColor });
  });

  it('should change button background color and text color if background is false', () => {
    renderTheme(<Button text="Button" to="/" background={0} />);
    expect(screen.getByRole('link', { name: 'Button' })).toHaveStyle({ background: 'transparent' });
    expect(screen.getByRole('link', { name: 'Button' })).toHaveStyle({ color: theme.colors.primaryColor });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Button text="Button" to="/" />);
    expect(container).toMatchSnapshot();
  });
});
