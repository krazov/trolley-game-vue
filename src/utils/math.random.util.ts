const { floor, random } = Math;

// source: https://stackoverflow.com/a/7228322
export const randomNumberBetween: (min: number, max: number) => number =
    (min, max) =>
        floor(random() * (max - min + 1) + min);
