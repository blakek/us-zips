import {Geolocation, ZIPCode} from ".";

export type ZIPCodeRecord = [ZIPCode, Geolocation];
export type ZIPCodeList = ZIPCodeRecord[];

declare const defaultExport: ZIPCodeList;
export default defaultExport;
