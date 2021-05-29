import { StopWatchFactory } from "../interfaces/StopWatchFactory";
import { StopWatch } from "../interfaces/StopWatch";
import { TimeStampRetriever } from "../interfaces/TimeStampRetriever";
import { TimeStampRetrieverImpl } from "./TimeStampRetrieverImpl";
import { PerformanceAPIWrapper } from "../interfaces/PerformanceAPIWrapper";
import { NodePerformanceAPIWrapperImpl } from "./NodePerformanceAPIWrapperImpl";
import { StopWatchImpl } from "./StopWatchImpl";

export class NodeStopWatchFactoryImpl implements StopWatchFactory {
  public createStopWatch(): StopWatch {
    const performanceAPIWrapper: PerformanceAPIWrapper =
      new NodePerformanceAPIWrapperImpl();
    const timeStampRetriever: TimeStampRetriever = new TimeStampRetrieverImpl(
      performanceAPIWrapper
    );
    return new StopWatchImpl(timeStampRetriever);
  }
}
