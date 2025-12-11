import { Plus } from "lucide-react";
import { PortfolioList } from "../../portfolio/PortfolioList";
import DashboardPagesHeader from "../../shared/dashboard-pages-header";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";


export function PortfolioPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 w-full">
      <div className="flex items-center justify-between">
        <DashboardPagesHeader
        pageTitle="Portfolios"
        pageDescription="Manage your investment portfolios"
      />

      <Button onClick={() => navigate('/portfolios/create')} className="h-10">
            <Plus className="size-4 mr-2" />
            Create Portfolio
        </Button>      
    </div>
      <PortfolioList />
    </div>
  );
}
