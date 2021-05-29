import { StopWatchFactory } from "../interfaces/StopWatchFactory";
import { StopWatch } from "../interfaces/StopWatch";
import { TimeStampRetriever } from "../interfaces/TimeStampRetriever";
import { TimeStampRetrieverImpl } from "./TimeStampRetrieverImpl";
import { PerformanceAPIWrapper } from "../interfaces/PerformanceAPIWrapper";
import { PerformanceAPIWrapperImpl } from "./PerformanceAPIWrapperImpl";
import { JavaScriptEnvironmentChecker } from "../interfaces/JavaScriptEnvironmentChecker";
import { JavaScriptEnvironmentCheckerImpl } from "./JavaScriptEnvironmentCheckerImpl";
import { StopWatchImpl } from "./StopWatchImpl";

export class StopWatchFactoryImpl implements StopWatchFactory {
  public createStopWatch(): StopWatch {
    const javaScriptEnvironmentChecker: JavaScriptEnvironmentChecker =
      new JavaScriptEnvironmentCheckerImpl();
    const performanceAPIWrapper: PerformanceAPIWrapper =
      new PerformanceAPIWrapperImpl(javaScriptEnvironmentChecker);
    const timeStampRetriever: TimeStampRetriever = new TimeStampRetrieverImpl(
      performanceAPIWrapper
    );
    return new StopWatchImpl(timeStampRetriever);
  }
}
