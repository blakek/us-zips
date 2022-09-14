import {Geolocation, ZIPCode} from ".";

export type ZIPCodeRecord = Geolocation & {zipCode: ZIPCode};
export type ZIPCodeList = ZIPCodeRecord[];

declare const defaultExport: ZIPCodeList;

export default defaultExport;
