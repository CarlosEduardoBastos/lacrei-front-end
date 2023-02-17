import { screen } from '@testing-library/react';
import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GridContent />', () => {
  it('should render a text a title and an image', () => {
    renderTheme(<GridContent title="title" text="text" src="image.img" />);
    expect(screen.getByRole('heading', { name: 'title' })).toBeInTheDocument();
    expect(screen.getByText('text')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should have two buttons on screen if haveButton is true', () => {
    renderTheme(<GridContent title="title" text="text" src="image.img" haveButton={true} />);
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('should have zero buttons on screen if haveButton is false', () => {
    renderTheme(<GridContent title="title" text="text" src="image.img" haveButton={false} />);
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GridContent title="title" text="text" src="image.img" />);
    expect(container).toMatchSnapshot();
  });
});
