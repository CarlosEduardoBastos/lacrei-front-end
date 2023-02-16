import { screen } from '@testing-library/react';
import { Link } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Link />', () => {
  it('should render a link', () => {
    renderTheme(<Link text="Home" to="/" />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Link text="Home" to="/" />);
    expect(container).toMatchSnapshot();
  });
});
