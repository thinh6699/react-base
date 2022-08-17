import Modal from 'react-bootstrap/Modal'

function ModalConfirm({ isShow, onOk, onCancel }: any) {
  return (
    <Modal centered show={isShow} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Do you want to logout?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='flex-center pt-5'>
          <button onClick={onOk} className='btn btn-info minw--25 me-3'>
            OK
          </button>
          <button
            onClick={onCancel}
            className='btn btn-outline-secondary minw--25'
          >
            Cancel
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalConfirm
