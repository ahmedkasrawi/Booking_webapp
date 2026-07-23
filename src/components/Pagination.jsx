export default function Pagination({ pagination, setPage,className }) {
  function handelPrev() {
    if (pagination?.isPreviousPage) {
      setPage((c) => c - 1);
      window.scrollTo({
        top: 0,
      });
    }
  }
  function handelNext() {
    if (pagination?.isNextPage) {
      setPage((c) => c + 1);
      window.scrollTo({
        top: 0,
      });
    }
  }
  function toOne() {
    setPage(() => 1);
    window.scrollTo({
      top: 0,
    });
  }
  function toEnd() {
    setPage(pagination?.totalPages);
    window.scrollTo({
      top: 0,
    });
  }
  return (
    <div className={`${className}`}>
      <div className="flex justify-center gap-2 ">
        <button
          disabled={!pagination?.isPreviousPage}
          className="py-1 px-2 bg-primary/50 cursor-pointer rounded disabled:bg-text-black/40 disabled:cursor-not-allowed"
          onClick={handelPrev}
        >
          {"السابق"}
        </button>
        {pagination?.totalPages <= 3 || !pagination?.totalPages ? (
          ""
        ) : (
          <button
            disabled={pagination?.currentPage === 1}
            className="py-1 px-2 bg-primary/50 cursor-pointer rounded disabled:bg-text-black/40 disabled:cursor-not-allowed"
            onClick={toOne}
          >
            1
          </button>
        )}

        <div className="py-1 px-3 min-w-15 border border-text-main rounded flex justify-center bg-text-white">
          {pagination?.currentPage || 0}/{pagination?.totalPages || 0}
        </div>
        {pagination?.totalPages <= 3 || !pagination?.totalPages ? (
          ""
        ) : (
          <button
            disabled={pagination?.currentPage === pagination?.totalPages}
            className="py-1 px-2 bg-primary/50 cursor-pointer rounded disabled:bg-text-black/40 disabled:cursor-not-allowed"
            onClick={toEnd}
          >
            {pagination?.totalPages}
          </button>
        )}

        <button
          disabled={!pagination?.isNextPage}
          className="py-1 px-2 bg-primary/50 cursor-pointer rounded disabled:bg-text-black/40 disabled:cursor-not-allowed"
          onClick={handelNext}
        >
          {"التالي"}
        </button>
      </div>
    </div>
  );
}
