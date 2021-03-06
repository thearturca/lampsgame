import PortalComponent from "../portal.component/portal.component";
import "./modal.component.css"

interface ModalComponentProps {
    active: boolean;
    onClose(): void;
    children?: React.ReactNode;
}

function ModalComponent(props: ModalComponentProps) {
  if (!props.active) {
    return null;
  }

  return (
    <PortalComponent>
      <div className="modal" role="dialog">
          <div 
            className={`modal-overlay ${props.active ? "active": ""}`}
            role="button"
            tabIndex={0}
            onClick={() => props.onClose()}
          />
          <div className={`modal-content ${props.active ? "active" : ""}`}>
              { props.children }
          </div>
      </div>
    </PortalComponent>
  )
}

export default ModalComponent