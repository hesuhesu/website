import React from 'react';
import { render, screen } from '@testing-library/react';
import Diary from '../routes/Diary.tsx';

describe('MyComponent', () => {
  test('renders the title', () => {
    render(<Diary />);
    
    // 타이틀이 제대로 렌더링되는지 확인
    const titleElement = screen.getByText(/hello, world!/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders a button', () => {
    render(<Diary/>);
    
    // 버튼이 렌더링되는지 확인
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });
});