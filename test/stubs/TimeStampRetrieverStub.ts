import { TimeStampRetriever } from "../../src/interfaces/TimeStampRetriever";

export class TimeStampRetrieverStub implements TimeStampRetriever {
  public getCurrentTimeStamp(): number {
    const dummyTimeStamp = 0;
    return dummyTimeStamp;
  }
}
