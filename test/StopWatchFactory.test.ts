import { StopWatchFactory } from "../src/interfaces/StopWatchFactory";
import { NodeStopWatchFactoryImpl } from "../src/implementations/NodeStopWatchFactoryImpl";
import { StopWatch } from "../src/interfaces/StopWatch";
import { StopWatchImpl } from "../src/implementations/StopWatchImpl";

test("should produce an instance of StopWatchImpl", () => {
  const stopWatchFactory: StopWatchFactory = new NodeStopWatchFactoryImpl();
  const stopWatch: StopWatch = stopWatchFactory.createStopWatch();
  expect(stopWatch instanceof StopWatchImpl).toBe(true);
});
