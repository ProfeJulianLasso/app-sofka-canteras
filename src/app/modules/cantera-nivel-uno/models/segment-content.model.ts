import { ActionForSegmentContentInterface } from './action-for-segment-content.model';

export interface SegmentContentInterface {
  title: string;
  content: string | HTMLElement;
  actions?: Array<ActionForSegmentContentInterface>;
}
