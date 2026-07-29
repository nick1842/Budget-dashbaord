"use client";

import { useState } from "react";
import DashboardStats from "./DashboardStats";
import SpendingBreakdown from "./SpendingBreakdown";
import SpendingChart from "./SpendingChart";
import BudgetAlerts from "./BudgetAlerts";
import DashboardHeader from "./DashboardHeader";
import DashboardActions from "./DashboardActions";

type Transaction = {
  id: number;
  amount: number;
  type: string;
  category: string;
  note: string | null;
};

export default function BudgetApp() {

  const [refresh, setRefresh] = useState(0);
  const [budgetRefresh, setBudgetRefresh] = useState(0);
  const [range, setRange] = useState("month");

  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);

  const [editingBudget, setEditingBudget] = useState<any>(null);

  const [savingsRefresh, setSavingsRefresh] = useState(0);


  function refreshData() {
    setRefresh((value) => value + 1);
  }

  function refreshBudgets() {
    setBudgetRefresh((value) => value + 1);
  }


  return (
    <div className="w-full">

      <main className="w-full max-w-2xl mx-auto px-4 pb-6">

        <DashboardHeader />

        <BudgetAlerts
          refresh={refresh}
        />

        <DashboardStats
          refresh={refresh}
          range={range}
          setRange={setRange}
        />

        <SpendingChart
          refresh={refresh}
          range={range}
        />

        <SpendingBreakdown
          refresh={refresh}
        />


        <DashboardActions

          refresh={refresh}

          refreshData={refreshData}

          refreshBudgets={refreshBudgets}

          editingBudget={editingBudget}

          setEditingBudget={setEditingBudget}

          editingTransaction={editingTransaction}

          setEditingTransaction={setEditingTransaction}

        />

      </main>

    </div>
  );
}