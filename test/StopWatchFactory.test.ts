import { StopWatchFactory } from "../src/interfaces/StopWatchFactory";
import { StopWatchFactoryImpl } from "../src/implementations/StopWatchFactoryImpl";
import { StopWatch } from "../src/interfaces/StopWatch";
import { StopWatchImpl } from "../src/implementations/StopWatchImpl";

test("should produce an instance of StopWatchImpl", () => {
  const stopWatchFactory: StopWatchFactory = new StopWatchFactoryImpl();
  const stopWatch: StopWatch = stopWatchFactory.createStopWatch();
  expect(stopWatch instanceof StopWatchImpl).toBe(true);
});
