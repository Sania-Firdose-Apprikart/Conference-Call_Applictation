// src/RaiseHandButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RaiseHandButton from "../../../../Components/Footer/Components/RaiseHandButton";

// Mock the useContext hook if needed in the future
jest.mock('react', () => ({
  ...jest.requireActual('react'),
}));

describe('Raise Hand Button Component', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(
      <RaiseHandButton
        footer={true}
        onRaiseHand={jest.fn()}
      />
    );
  });

  it('calls onRaiseHand when clicked', () => {
    const mockRaiseHand = jest.fn();
    const { getByRole } = render(
      <RaiseHandButton
        footer={true}
        onRaiseHand={mockRaiseHand}
      />
    );

    const button = getByRole('button');
    fireEvent.click(button);

    expect(mockRaiseHand).toHaveBeenCalledTimes(1);
  });

});
