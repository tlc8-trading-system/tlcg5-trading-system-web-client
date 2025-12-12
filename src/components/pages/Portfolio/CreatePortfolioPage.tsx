import DashboardPagesHeader from "../../shared/dashboard-pages-header";
import { CreateAPortfolio } from "../../portfolio/CreatePortfolio";


export function CreatePortfolioPage() {

  return (
    <div className="space-y-8 w-full">
        <DashboardPagesHeader
        pageTitle="Create Portfolio"
        pageDescription="Set up a new investment portfolio"
        />
        <CreateAPortfolio/>
    </div>

  );
}
