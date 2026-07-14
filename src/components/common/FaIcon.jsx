import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FaIcon({ icon, size = 18, style, ...props }) {
  return <FontAwesomeIcon icon={icon} style={{ width: size, height: size, ...style }} {...props} />;
}

export function createFaIcon(icon) {
  return function IconComponent(props) {
    return <FaIcon icon={icon} {...props} />;
  };
}
