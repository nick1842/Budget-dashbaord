"use client";

import { useState } from "react";
import DashboardStats from "./DashboardStats";
import SpendingBreakdown from "./SpendingBreakdown";
import SpendingChart from "./SpendingChart";
import BudgetAlerts from "./BudgetAlerts";
import DashboardHeader from "./DashboardHeader";
import DashboardActions from "./DashboardActions";
import BottomNav from "./BottomNav";

type Transaction = {
  id: number;
  amount: number;
  type: string;
  category: string;
  note: string | null;
};

export default function BudgetApp() {

  const [refresh, setRefresh] = useState(0);
  const [range, setRange] = useState("month");

  const [page, setPage] = useState("home");

  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);

  const [editingBudget, setEditingBudget] = useState<any>(null);


  function refreshData() {
    setRefresh((value) => value + 1);
  }


  function refreshBudgets() {
    setRefresh((value) => value + 1);
  }


  return (
    <div className="w-full">

      <main className="w-full max-w-2xl mx-auto px-4">

        {page === "home" && (
          <>

            <DashboardHeader />

            <BudgetAlerts
  refresh={refresh}
  onEdit={setEditingBudget}
  onBudgetChanged={refreshBudgets}
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

          </>
        )}



        {page === "budgets" && (
          <DashboardActions
            refresh={refresh}
            refreshData={refreshData}
            refreshBudgets={refreshBudgets}
            editingBudget={editingBudget}
            setEditingBudget={setEditingBudget}
            editingTransaction={editingTransaction}
            setEditingTransaction={setEditingTransaction}
          />
        )}



        {page === "savings" && (
          <DashboardActions
            refresh={refresh}
            refreshData={refreshData}
            refreshBudgets={refreshBudgets}
            editingBudget={editingBudget}
            setEditingBudget={setEditingBudget}
            editingTransaction={editingTransaction}
            setEditingTransaction={setEditingTransaction}
          />
        )}



        {page === "transactions" && (
          <DashboardActions
            refresh={refresh}
            refreshData={refreshData}
            refreshBudgets={refreshBudgets}
            editingBudget={editingBudget}
            setEditingBudget={setEditingBudget}
            editingTransaction={editingTransaction}
            setEditingTransaction={setEditingTransaction}
          />
        )}

      </main>


      <BottomNav
        setPage={setPage}
      />


    </div>
  );
}