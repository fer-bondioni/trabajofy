import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
    sort,
    sortOptions,
  } = useAppContext();
  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        {/*search options*/}
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          ></FormRow>
          <FormRowSelect
            labelText="job Status"
            value={searchStatus}
            handleChange={handleSearch}
            name="searchStatus"
            list={["all", ...statusOptions]}
          ></FormRowSelect>
          <FormRowSelect
            labelText="job Type"
            value={searchType}
            handleChange={handleSearch}
            name="searchType"
            list={["all", ...jobTypeOptions]}
          ></FormRowSelect>
          <FormRowSelect
            value={sort}
            handleChange={handleSearch}
            name="sort"
            list={sortOptions}
          ></FormRowSelect>
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
