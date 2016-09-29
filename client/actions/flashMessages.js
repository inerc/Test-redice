/**
 * Created by inerc on 27.09.16.
 */

import { ADD_FLASH_MESSAGE} from './types';

export function addFlasMessage(message) {

    return {
        type: ADD_FLASH_MESSAGE,
        message
    }

}
