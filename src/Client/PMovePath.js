﻿
import { PPlayerState } from "../game/Physics/PPlayer.js";//debug


export class BaseMoveElem {
	constructor() {
		/** @type {number} */
		this.x = null;

		/** @type {number} */
		this.y = null;

		/** @type {number} - linear velocity x */
		this.vx = undefined;

		/** @type {number} - linear velocity y */
		this.vy = undefined;

		/** @type {number} - force x */
		this.fx = undefined;

		/** @type {number} - force y */
		this.fy = undefined;

		/** @type {PPlayerState} - player physics state */
		this.pState = null;

		/** @type {number} - time elapsed */
		this.elapsed = 0;
		
		/** @type {boolean} */
		this.isAwake = undefined;// value = ?

		/** @type {string} */
		this.action = undefined;
		/** @type {number} */
		this.action_frame = undefined;

		/** @type {string} */
		this.emotion = undefined;
		/** @type {number} */
		this.emotion_frame = undefined;
	}
}

export class CharacterMoveElem extends BaseMoveElem {
}

export class MobMoveElem extends BaseMoveElem {
}
