export default function Pagination({ page, classNames }) {
    return (
        <div className={`join ${classNames}`}>
          <button className="join-item btn">«</button>
          <button className="join-item btn">{page}</button>
          <button className="join-item btn">»</button>
        </div>
    );
}
