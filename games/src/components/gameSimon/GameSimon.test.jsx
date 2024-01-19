import { test, expect, describe, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import GameSimon from "./GameSimon";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test(" should render", () => {
  const CustomProvider = () => {
    return (
      <Provider store={store}>
        <GameSimon />
      </Provider>
    );
  };
  const { container } = render(<CustomProvider />);

  expect(container).toBeTruthy();
}),
  test("playButton should render", () => {
    const CustomProvider = () => {
      return (
        <Provider store={store}>
          <GameSimon />
        </Provider>
      );
    };

    render(<CustomProvider />);

    const playButton = screen.getByTestId("playButton");

    expect(playButton).toBeTruthy();

    const testPlayButton = playButton.textContent;
    expect(testPlayButton).toBe("Play");
  }),
  test("should render buttons", () => {
    const CustomProvider = () => {
      return (
        <Provider store={store}>
          <GameSimon />
        </Provider>
      );
    };

    render(<CustomProvider />);

    const redButton = screen.getByTestId("redButton");
    const blueButton = screen.getByTestId("blueButton");
    const yellowButton = screen.getByTestId("yellowButton");
    const greenButton = screen.getByTestId("greenButton");

    expect(redButton).toBeTruthy();
    expect(blueButton).toBeTruthy();
    expect(yellowButton).toBeTruthy();
    expect(greenButton).toBeTruthy();
  }),
  test(" should handle click", async () => {
    const CustomProvider = () => {
      return (
        <Provider store={store}>
          <GameSimon />
        </Provider>
      );
    };

    render(<CustomProvider />);

    const playButton = screen.getByTestId("playButton");

    await waitFor(() => fireEvent.click(playButton));

    const testPlayButton = playButton.textContent;

    expect(testPlayButton).toBe("1");

    vi.spyOn(Math, "random").mockReturnValue(0.2);

    const redButton = screen.getByRole("button", { name: "redButton" });

    const event = await waitFor(() => fireEvent.click(redButton));

    expect(event).toBeTruthy();
    const playButton2 = screen.getByTestId("playButton");

    expect(playButton2.textContent).toBe("2");
  });
