import { render, screen } from '@testing-library/react';
import App from './App';

import {shallow} from 'enzyme';
import {moun} from 'enzyme';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders without crashing", () => {
  shallow(<App />);
});

beforeEach(() => {
  fetch.resetMocks();
});

it("finds exchange", async () => {
  fetch.mockReturnValue(Promise.resolve(new Response(7)));

  const clock = App.currentTime;
  expect(clock).toEqual(7);
});



