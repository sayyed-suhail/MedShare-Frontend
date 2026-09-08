import './DashboardPage.css';


import StatCard from '../../../components/stateCard';
import InsightCard from '../../../components/InsightCard';
import DonationTable from '../../../components/DonationTable';

// ---- MOCK DATA ----
// This stands in for what will later come from your backend API.
const mockDonations = [
  {
    id: 1,
    name: 'Amoxicillin 500mg',
    category: 'Antibiotics',
    date: 'Oct 24, 2023',
    status: 'Picked Up',
    icon: 'medication_liquid',
  },
  {
    id: 2,
    name: 'Lisinopril 10mg',
    category: 'Blood Pressure',
    date: 'Oct 26, 2023',
    status: 'Approved',
    icon: 'pill',
  },
  {
    id: 3,
    name: 'Insulin Glargine',
    category: 'Diabetes',
    date: 'Oct 28, 2023',
    status: 'Pending',
    icon: 'vaccines',
  },
  {
    id: 4,
    name: 'Ibuprofen 400mg',
    category: 'Pain Relief',
    date: 'Oct 29, 2023',
    status: 'Pending',
    icon: 'healing',
  },
];

export default function DashboardPage() {
  return (
    <div className="dashboard-page">

      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <h2 className="dashboard-title">
            Welcome back, Sarah
          </h2>

          <p className="dashboard-subtitle">
            Here is the impact of your recent medicine donations.
          </p>
        </div>

        <button className="add-medicine-btn" type="button">
          Add New Medicine
        </button>
      </div>

      {/* Stats */}
      <div className="dashboard-stats">

        <StatCard
          icon="medication"
          label="Total Donated"
          value="142"
          unit="units"
        />

        <StatCard
          icon="favorite"
          label="Lives Impacted"
          value="380"
          unit="patients"
          variant="warm"
        />

        <InsightCard
          icon="trending_up"
          badge="This Month"
          title="+24% Increase"
          description="Your contributions are growing steadily compared to last month."
        />

      </div>

      {/* Recent Donations */}
      <DonationTable
        donations={mockDonations}
        onViewAll={() => {}}
      />

    </div>
  );
}