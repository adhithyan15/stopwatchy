import { StopWatchFactory } from "./interfaces/StopWatchFactory";
import { NodeStopWatchFactoryImpl } from "./implementations/NodeStopWatchFactoryImpl";

export function getStopWatchFactory(): StopWatchFactory {
  return new NodeStopWatchFactoryImpl();
}
