import { StopWatchFactory } from "./interfaces/StopWatchFactory";
import { StopWatchFactoryImpl } from "./implementations/StopWatchFactoryImpl";

export function getStopWatchFactory(): StopWatchFactory {
  return new StopWatchFactoryImpl();
}
