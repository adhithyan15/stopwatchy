import { PerformanceAPIWrapper } from "../interfaces/PerformanceAPIWrapper";
import { JavaScriptEnvironmentChecker } from "../interfaces/JavaScriptEnvironmentChecker";

export class PerformanceAPIWrapperImpl implements PerformanceAPIWrapper {
  constructor(
    private javaScriptEnvironmentChecker: JavaScriptEnvironmentChecker
  ) {}
  public isPerformanceDefined(): boolean {
    return (
      !this.javaScriptEnvironmentChecker.isEnvironmentNodeJS() &&
      performance !== undefined
    );
  }
  public isPerformanceNowDefined(): boolean {
    return "now" in performance;
  }
  public getPerformanceNow(): number {
    return performance.now();
  }
}
