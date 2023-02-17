import { Header } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Header />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Header />);
    expect(container).toMatchSnapshot();
  });
});
