import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // 정확한 텍스트를 지정하거나
  expect(screen.getByText('Vite + React')).toBeInTheDocument();

  // 또는 getAllByText 사용 후 첫 번째 요소 확인
  // const elements = screen.getAllByText(/vite/i);
  // expect(elements[0]).toBeInTheDocument();
});
