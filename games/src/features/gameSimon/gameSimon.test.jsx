import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GameSimon from './GameSimon';

describe('GameSimon', () => {
    it('should render without errors', () => {
        render(<GameSimon />);
    });

    it('should start the game when the start button is clicked', () => {
        const { getByTestId } = render(<GameSimon />);
        const startButton = getByTestId('start-button');

        fireEvent.click(startButton);

        // Add your assertions here to check if the game has started
    });

    it('should handle user input correctly', () => {
        const { getByTestId } = render(<GameSimon />);
        const redButton = getByTestId('red-button');

        fireEvent.click(redButton);

        // Add your assertions here to check if the user input is handled correctly
    });

    // Add more test cases as needed
});
