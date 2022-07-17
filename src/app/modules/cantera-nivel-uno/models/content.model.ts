import { SegmentContentInterface } from './segment-content.model';

export interface ContentInterface {
  url: string | Array<string>;
  data: Array<SegmentContentInterface>;
}
