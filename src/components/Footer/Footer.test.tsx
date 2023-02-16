import { Footer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Footer />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
