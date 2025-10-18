function SortBar({ sortBy, setSortBy, filterClass, setFilterClass }) {
  const classes = ['Support', 'Medic', 'Assault', 'Defender', 'Captain', 'Witch'];

  const toggleFilter = (botClass) => {
    if (filterClass.includes(botClass)) {
      setFilterClass(filterClass.filter(c => c !== botClass));
    } else {
      setFilterClass([...filterClass, botClass]);
    }
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <label className="form-label fw-bold">Sort By Criteria:</label>
            <select 
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">None</option>
              <option value="health">Health</option>
              <option value="damage">Damage</option>
              <option value="armor">Armor</option>
            </select>
          </div>
          
          <div className="col-md-6">
            <label className="form-label fw-bold">Filter by Class:</label>
            <div className="d-flex flex-wrap gap-2">
              {classes.map(botClass => (
                <button
                  key={botClass}
                  className={`btn btn-sm ${filterClass.includes(botClass) ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => toggleFilter(botClass)}
                >
                  {botClass}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortBar;