import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import type { ActiveTrade, ModifyActiveTrade } from "../../types";

interface ModifyTradeProps {
  trade: ActiveTrade;
  showModifyDialog: boolean;
  setShowModifyDialog: (state: boolean) => void;
  modifyData: ModifyActiveTrade;
  setModifyData: (state: ModifyActiveTrade) => void;
  handleSaveModify: () => void;
}

const ModifyTrade: React.FC<ModifyTradeProps> = ({
  trade,
  showModifyDialog,
  setShowModifyDialog,
  modifyData,
  setModifyData,
  handleSaveModify,
}) => {
  return (
    <Dialog open={showModifyDialog} onOpenChange={setShowModifyDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modify your trade</DialogTitle>
          <DialogDescription>
            Adjust stop loss and take profit for your {modifyData?.symbol}
          </DialogDescription>
        </DialogHeader>

        {modifyData && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="symbol">Asset</Label>
              <Input id="symbol" type="text" value={trade.symbol} disabled />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2">
                <Label htmlFor="quantity">
                  Quantity {trade.type === "Buy" ? "bought" : "sold"}
                </Label>
                <Input
                  id="quantity"
                  type="text"
                  value={trade.quantity}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="entryPrice">Entry Price</Label>
                <Input
                  id="entryPrice"
                  type="number"
                  value={trade.entryPrice}
                  disabled
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2">
                <Label htmlFor="stopLoss">Stop Loss</Label>
                <Input
                  id="stopLoss"
                  type="number"
                  step="0.01"
                  value={modifyData.stopLoss}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (
                      (trade.type == "Buy" && val > trade.entryPrice) ||
                      (trade.type === "Sell" && val < trade.entryPrice)
                    )
                      return;
                    setModifyData({ ...modifyData, stopLoss: val.toString() });
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="takeProfit">Take Profit</Label>
                <Input
                  id="takeProfit"
                  type="number"
                  step="0.01"
                  value={modifyData.takeProfit}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (
                      (trade.type == "Sell" && val > trade.entryPrice) ||
                      (trade.type == "Buy" && val < trade.entryPrice)
                    )
                      return;
                    setModifyData({
                      ...modifyData,
                      takeProfit: val.toString(),
                    });
                  }}
                />
              </div>
            </div>

            <div className="rounded-lg bg-muted p-3 text-sm text-muted-foreground">
              Note: Price and volume cannot be adjusted for active positions
            </div>
          </div>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={() => setShowModifyDialog(false)}>
            Cancel
          </Button>
          <Button onClick={handleSaveModify}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModifyTrade;
