"use client";

export default function BottomNav({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  return (
    <div
      className="
        w-full
        h-20
        bg-zinc-900
        border-t
        border-zinc-800
        flex
        items-center
        justify-around
        mt-8
      "
    >

      <button
        onClick={() => setPage("home")}
        className="
          flex
          flex-col
          items-center
          justify-center
          text-gray-400
        "
      >
        <span className="text-2xl">
          🏠
        </span>

        <span className="text-xs">
          Home
        </span>
      </button>


      <button
        onClick={() => setPage("budgets")}
        className="
          flex
          flex-col
          items-center
          justify-center
          text-gray-400
        "
      >
        <span className="text-2xl">
          💳
        </span>

        <span className="text-xs">
          Budgets
        </span>
      </button>


      <button
        onClick={() => setPage("savings")}
        className="
          flex
          flex-col
          items-center
          justify-center
          text-gray-400
        "
      >
        <span className="text-2xl">
          💰
        </span>

        <span className="text-xs">
          Savings
        </span>
      </button>


      <button
        onClick={() => setPage("transactions")}
        className="
          flex
          flex-col
          items-center
          justify-center
          text-gray-400
        "
      >
        <span className="text-2xl">
          📋
        </span>

        <span className="text-xs">
          Transactions
        </span>
      </button>

    </div>
  );
}