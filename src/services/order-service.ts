import type { ServerActiveTrade } from "../types/server";

/**
 * Args:
 *      Take active positions of user
 *      Take asset to check if is owned
 * 
 * Add logic to check if user owns asset
 * 
 * return true or false
 */
export const checkIfUserOwnsAsset = () => {
    return true; // return true for now
}


/**
 * return profit and loss for active trade
 */

export const profitLoss = (order: ServerActiveTrade) => {
    /**
     * if buy (current price - entry price) * quantity 
     * if entry (current price - current price) * quantity 
     */
    if (order.side === "BUY") {
        return (order.filledPrice - order.requested_price) * order.filledQuantity;
    } else {
        return (order.requested_price - order.filledPrice) * order.filledQuantity;
    }
}