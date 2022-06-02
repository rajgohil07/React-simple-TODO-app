export const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="">Task name:</label>
        <input type="text" name="" id="" />
      </div>
      <div className="form-control">
        <label htmlFor="">Select date and time</label>
        <input type="text" name="" id="" />
      </div>
      <div className="form-control form-control-check">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">is task completed?</label>
      </div>
      <input type="submit" className="btn btn-block" value="Add task" />
    </form>
  );
};
