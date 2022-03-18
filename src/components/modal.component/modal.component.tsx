import "/modal.component.css"

interface ModalComponentProps {
    children?: React.ReactNode;
}

function ModalComponent(props: ModalComponentProps) {
  return (
    <div className="modal">
        <div className="modal-content">
            { props.children }
        </div>
    </div>
  )
}

export default ModalComponent