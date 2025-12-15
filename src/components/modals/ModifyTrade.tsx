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
import type { ModifyActiveTrade } from "../../types";
import type { ServerActiveTrade } from "../../types/server";

interface ModifyTradeProps {
  trade: ServerActiveTrade;
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
  handleSaveModify, // TODO: Validate quantity against order quantity available
}) => {
  return (
    <Dialog open={showModifyDialog} onOpenChange={setShowModifyDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modify your order</DialogTitle>
          <DialogDescription>
            Adjust quantity {trade.type === "LIMIT" && "and price"} for your{" "}
            {trade.product}
          </DialogDescription>
        </DialogHeader>

        {modifyData && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="symbol">Asset</Label>
              <Input id="symbol" type="text" value={trade.product} disabled />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2 w-full">
                <Label htmlFor="quantity">
                  Quantity {trade.type === "Buy" ? "bought" : "sold"}
                </Label>
                <Input
                  id="quantity"
                  type="text"
                  value={modifyData.quantity}
                  onChange={(e) =>
                    setModifyData({ ...modifyData, quantity: +e.target.value })
                  }
                />
              </div>
              {trade.type === "LIMIT" && (
                <div className="space-y-2 w-full">
                  <Label htmlFor="price">Entry Price</Label>
                  <Input
                    id="price"
                    type="number"
                    value={modifyData.price}
                    onChange={(e) => {
                      setModifyData({
                        ...modifyData,
                        price: +e.target.value,
                      });
                    }}
                  />
                </div>
              )}
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
