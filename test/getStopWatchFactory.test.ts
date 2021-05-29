import { getStopWatchFactory } from "../src/index";
import { StopWatchFactoryImpl } from "../src/implementations/StopWatchFactoryImpl";

test("should produce an instance of StopWatchFactoryImpl", () => {
  expect(getStopWatchFactory() instanceof StopWatchFactoryImpl).toBe(true);
});
