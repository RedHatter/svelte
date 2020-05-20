import Element from '../nodes/Element';
import InlineComponent from '../nodes/InlineComponent';

export interface CssNode {
	type: string;
	start: number;
	end: number;
	[prop_name: string]: any;
}

export type Tag = Element|InlineComponent
