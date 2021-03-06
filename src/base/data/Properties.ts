import { TYPE } from './type'

/**
 * 建筑物属性
 */
export class Properties {
	/**
	 * 高度，房间高、楼层高或者建筑物高
	 */
	height: number;
	/**
	 * 名称，用于显示label
	 */
	name: string;
	/**
	 * 建筑物类型，可以是洗手间、超市、商店等
	 */
	type: TYPE;
	/**
	 * 楼层数，第几层
	 */
	floor: number;
	/**
	 * 建筑物的唯一标识ID
	 */
	id: string;
}