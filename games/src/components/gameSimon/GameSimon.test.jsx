import { test, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GameSimon from "./GameSimon";
import { Provider } from "react-redux";
import { store } from "../../store/store";

test(
  "GameSimon ",
  it(" should render", () => {
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

  it("playButton should render", () => {
    const CustomProvider = () => {
      return (
        <Provider store={store}>
          <GameSimon />
        </Provider>
      );
    };
    const { container } = render(<CustomProvider />);

    const playButton = container.querySelector("button");
    expect(playButton).toBeTruthy();

    const testPlayButton = playButton.textContent;
    expect(testPlayButton).toBe("Play");
  })
);
