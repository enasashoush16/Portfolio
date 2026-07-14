import { Link } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import FaIcon from '../../components/common/FaIcon.jsx';
import PageTransition from '../../components/layout/PageTransition.jsx';

export default function NotFound() {
  return (
    <PageTransition>
      <div className="container">
        <div className="empty-state">
          <span className="eyebrow">404</span>
          <h1 className="section-title gradient-text">This route does not exist</h1>
          <p>The portfolio is still here. The page you requested is not.</p>
          <Link className="btn btn-primary" to="/">
            <FaIcon icon={faHouse} size={18} />
            Return Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
