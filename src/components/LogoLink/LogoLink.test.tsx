import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink to="/" text="Logo" />);
    expect(screen.getByRole('link', { name: 'Logo' })).toHaveAttribute('href', '/');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink to="/" text="Logo" />);
    expect(container).toMatchSnapshot();
  });
});
