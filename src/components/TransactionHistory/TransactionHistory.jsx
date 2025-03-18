import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.container}>
      <thead className={css.head}>
        <tr>
          <th className={css.headEl}>Type</th>
          <th className={css.headEl}>Amount</th>
          <th className={css.headEl}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.formBody}>
        {items.map((item) => {
          return (
            <tr className={css.line} key={item.id}>
              <td className={css.cell}>{item.type}</td>
              <td className={css.cell}>{item.amount}</td>
              <td className={css.cell}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
