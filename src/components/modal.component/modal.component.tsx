import PortalComponent from "../portal.component/portal.component";
import "./modal.component.css"

interface ModalComponentProps {
    active: boolean;
    setActive(isActive:boolean): void;
    children?: React.ReactNode;
}

function ModalComponent(props: ModalComponentProps) {
  if (!props.active) {
    return null;
  }

  return (
    <PortalComponent>
    <div className="modal">
        <div 
          className="modal-overlay"
          role="button"
          tabIndex={0}
          onClick={() => props.setActive(false)}
        />
        <div className="modal-content">
            { props.children }
        </div>
    </div>
    </PortalComponent>
  )
}

export default ModalComponent