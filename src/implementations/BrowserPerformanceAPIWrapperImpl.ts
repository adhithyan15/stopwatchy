import { PerformanceAPIWrapper } from "../interfaces/PerformanceAPIWrapper";

export class BrowserPerformanceAPIWrapperImpl implements PerformanceAPIWrapper {
  public isPerformanceDefined(): boolean {
    return performance !== undefined;
  }
  public isPerformanceNowDefined(): boolean {
    return "now" in performance;
  }
  public getPerformanceNow(): number {
    return performance.now();
  }
}
