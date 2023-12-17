import { render } from '@testing-library/react';
import { Counter } from '.';
import { describe, expect, it } from 'vitest';

describe('The Counter component', () => {
  describe('if the button is not clicked', () => {
    it('should display 0', () => {
      const counter = render(<Counter />);

      const paragraph = counter.getByText('The number of clicks: 0', {
        selector: 'p',
      });

      expect(paragraph).toBeDefined();
    });
  });
});
