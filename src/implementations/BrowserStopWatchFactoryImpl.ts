import { StopWatchFactory } from "../interfaces/StopWatchFactory";
import { StopWatch } from "../interfaces/StopWatch";
import { TimeStampRetriever } from "../interfaces/TimeStampRetriever";
import { TimeStampRetrieverImpl } from "./TimeStampRetrieverImpl";
import { PerformanceAPIWrapper } from "../interfaces/PerformanceAPIWrapper";
import { BrowserPerformanceAPIWrapperImpl } from "./BrowserPerformanceAPIWrapperImpl";
import { StopWatchImpl } from "./StopWatchImpl";

export class BrowserStopWatchFactoryImpl implements StopWatchFactory {
  public createStopWatch(): StopWatch {
    const performanceAPIWrapper: PerformanceAPIWrapper =
      new BrowserPerformanceAPIWrapperImpl();
    const timeStampRetriever: TimeStampRetriever = new TimeStampRetrieverImpl(
      performanceAPIWrapper
    );
    return new StopWatchImpl(timeStampRetriever);
  }
}
