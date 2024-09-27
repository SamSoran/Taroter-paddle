import { DashboardPageHeader } from '../../layout/dashboard-page-header';
import { ErrorContent } from '../../layout/error-content';

export function SubscriptionErrorView() {
  return (
    <>
      <DashboardPageHeader pageTitle={'Subscriptions'} />
      <ErrorContent />
    </>
  );
}
