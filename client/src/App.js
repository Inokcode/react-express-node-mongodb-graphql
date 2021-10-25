import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label>Detail</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter detail"
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div></div>
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small class="text-muted">And some muted small print.</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small class="text-muted">And some muted small print.</small>
        </a>
      </div>
    </div>
  );
}

export default App;
