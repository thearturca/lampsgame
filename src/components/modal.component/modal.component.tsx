import "./modal.component.css"

interface ModalComponentProps {
    active: boolean;
    setActive(isActive:boolean): void;
    children?: React.ReactNode;
}

function ModalComponent(props: ModalComponentProps) {
  return (
    <div className={`modal ${props.active ? "active" : ""}`} onClick={() => props.setActive(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            { props.children }
        </div>
    </div>
  )
}

export default ModalComponent