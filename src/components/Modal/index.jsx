
function Modal({title, body, closeHandler}) {
  return (
    <div className="modal fade show d-block" aria-labelledby="exampleModalLabel" aria-hidden="true" tabIndex="-1">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-dark text-white">
            <h1 className="modal-title fs-5">{title}</h1>
            <button type="button" className="btn-close bg-white" onClick={closeHandler}></button>
          </div>
          <div className="modal-body">
            {body}
          </div>
          <div className="modal-footer">
            <button onClick={closeHandler} type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
