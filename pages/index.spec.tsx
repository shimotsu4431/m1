import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, screen } from '@testing-library/react'

import Index from './index'

describe('Index', () => {
  it('タイトルが表示されているか', () => {
    render(<Index />)

    screen.getByText('SELECT UI');
  })
})
