interface DashboardPagesHeaderProps {
  pageTitle: string;
  pageDescription: string;
}

const DashboardPagesHeader: React.FC<DashboardPagesHeaderProps> = ({
  pageTitle,
  pageDescription,
}) => {
  return (
    <div className="text-left">
      <h1>{pageTitle}</h1>
      <p className="text-muted-foreground mt-1">{pageDescription}</p>
    </div>
  );
};

export default DashboardPagesHeader;
