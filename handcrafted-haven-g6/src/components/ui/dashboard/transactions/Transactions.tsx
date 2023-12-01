import Image from "next/image";
import { transactionsData } from "@/lib/constants";

const Transactions = () => {
  const statusClass = {
    Success: "bg-twine-400",
    Pending: "bg-silverSand-950",
    Cancelled: "bg-mexicanRed-500",
  };
  return (
    <div className="bg-kumera-600 p-5 rounded-lg">
      <h2 className="mb-5 font-light text-silverSand-50">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-2">Name</td>
            <td className="p-2">Status</td>
            <td className="p-2">Date</td>
            <td className="p-2">Amount</td>
          </tr>
        </thead>
        <tbody>
          {transactionsData.map((item) => {
            return (
              <tr key={item.id}>
                <td className="p-2">
                  <div className="flex gap-[10] items-center">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      width={30}
                      height={30}
                      className="object-cover rounded-full"
                    />
                    <p className="pl-2">{item.name}</p>
                  </div>
                </td>
                <td className="p-2">
                  <span
                    className={`rounded-md p-[5px] text-sm text-silverSand-50 ${
                      item.status === "Success" ? "bg-Kilamanjaro-950" : ""
                    } ${item.status === "Pending" ? "bg-silverSand-950" : ""} ${
                      item.status === "Cancelled" ? "bg-mexicanRed-500" : ""
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.date}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
