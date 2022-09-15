import {Geolocation, ZIPCode} from ".";

export type ZIPCodeList = Record<ZIPCode, Geolocation>;

declare const defaultExport: ZIPCodeList;
export default defaultExport;
