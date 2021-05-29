import { JavaScriptEnvironmentChecker } from "../interfaces/JavaScriptEnvironmentChecker";

export class JavaScriptEnvironmentCheckerImpl
  implements JavaScriptEnvironmentChecker
{
  public isEnvironmentNodeJS(): boolean {
    return (
      process !== undefined &&
      process.versions !== undefined &&
      process.versions.node !== undefined
    );
  }
}
